/**
 * Main application class
 */
import { CONFIG } from './config.js';
import { loadData, saveData, loadConfig, saveConfig } from './storage.js';
import { getWeekStart, formatDate, getMonthDays } from './utils.js';
import { renderConsistencyChart, renderWeeklyChart, renderCompletionChart } from './charts.js';
import { renderHabitGrid, renderTopHabits, updateDashboardStats } from './ui.js';

export class App {
    constructor() {
        this.habits = [];
        this.trackingData = {}; // { habitId: { date: true/false } }
        this.currentWeekStart = getWeekStart(new Date());
        
        this.init();
    }
    
    init() {
        this.checkStorage();
        this.setupEventListeners();
        this.loadAppData();
        this.renderDashboard();
        this.renderHabitGrid();
    }
    
    /**
     * Check storage configuration
     */
    checkStorage() {
        const config = loadConfig();
        if (!config) {
            document.getElementById('setupModal')?.classList.add('show');
        }
    }
    
    /**
     * Setup event listeners
     */
    setupEventListeners() {
        document.getElementById('addHabitBtn')?.addEventListener('click', () => this.addHabit());
        document.getElementById('newHabitInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addHabit();
        });
        document.getElementById('prevWeek')?.addEventListener('click', () => this.navigateWeek(-1));
        document.getElementById('nextWeek')?.addEventListener('click', () => this.navigateWeek(1));
        document.getElementById('connectSheetBtn')?.addEventListener('click', () => this.connectGoogleSheet());
        document.getElementById('useLocalStorageBtn')?.addEventListener('click', () => this.useLocalStorage());
        
        // Close modal when clicking outside
        document.getElementById('setupModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'setupModal') {
                document.getElementById('setupModal')?.classList.remove('show');
            }
        });
    }
    
    /**
     * Load application data
     */
    loadAppData() {
        const data = loadData();
        if (data) {
            this.habits = data.habits || [];
            this.trackingData = data.trackingData || {};
            if (data.currentWeekStart) {
                this.currentWeekStart = new Date(data.currentWeekStart);
            }
        }
    }
    
    /**
     * Save application data
     */
    saveAppData() {
        const data = {
            habits: this.habits,
            trackingData: this.trackingData,
            currentWeekStart: this.currentWeekStart.toISOString()
        };
        saveData(data);
    }
    
    /**
     * Add a new habit
     */
    addHabit() {
        const input = document.getElementById('newHabitInput');
        const habitName = input?.value.trim();
        
        if (habitName) {
            const habit = {
                id: Date.now().toString(),
                name: habitName,
                createdAt: new Date().toISOString()
            };
            
            this.habits.push(habit);
            this.trackingData[habit.id] = {};
            if (input) input.value = '';
            this.saveAppData();
            this.renderHabitGrid();
            this.renderDashboard();
        }
    }
    
    /**
     * Delete a habit
     * @param {string} habitId - ID of the habit to delete
     */
    deleteHabit(habitId) {
        if (confirm('Are you sure you want to delete this habit? All tracking data will be lost.')) {
            this.habits = this.habits.filter(h => h.id !== habitId);
            delete this.trackingData[habitId];
            this.saveAppData();
            this.renderHabitGrid();
            this.renderDashboard();
        }
    }
    
    /**
     * Toggle habit completion
     * @param {string} habitId - ID of the habit
     * @param {string} dateStr - Date string in YYYY-MM-DD format
     */
    toggleHabit(habitId, dateStr) {
        if (!this.trackingData[habitId]) {
            this.trackingData[habitId] = {};
        }
        
        this.trackingData[habitId][dateStr] = !this.trackingData[habitId][dateStr];
        this.saveAppData();
        this.renderHabitGrid();
        this.renderDashboard();
    }
    
    /**
     * Navigate to previous/next week
     * @param {number} direction - -1 for previous, 1 for next
     */
    navigateWeek(direction) {
        const newDate = new Date(this.currentWeekStart);
        newDate.setDate(newDate.getDate() + (direction * 7));
        this.currentWeekStart = getWeekStart(newDate);
        this.renderHabitGrid();
    }
    
    /**
     * Render the dashboard
     */
    renderDashboard() {
        const monthDays = getMonthDays();
        
        // Calculate overall statistics
        let totalPossible = 0;
        let totalCompleted = 0;
        const habitStats = {};
        
        this.habits.forEach(habit => {
            habitStats[habit.id] = { name: habit.name, completed: 0, total: 0 };
            
            monthDays.forEach(day => {
                const dateStr = formatDate(day);
                totalPossible++;
                habitStats[habit.id].total++;
                
                if (this.trackingData[habit.id] && this.trackingData[habit.id][dateStr]) {
                    totalCompleted++;
                    habitStats[habit.id].completed++;
                }
            });
        });
        
        // Update global progress
        const overallPercentage = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
        const remaining = totalPossible - totalCompleted;
        
        updateDashboardStats(overallPercentage, totalCompleted, remaining);
        
        // Render charts
        renderConsistencyChart(monthDays, this.habits, this.trackingData);
        renderWeeklyChart(this.habits, this.trackingData, getWeekStart);
        renderCompletionChart(totalCompleted, remaining);
        renderTopHabits(habitStats);
    }
    
    /**
     * Render the habit grid
     */
    renderHabitGrid() {
        renderHabitGrid(
            this.habits,
            this.trackingData,
            this.currentWeekStart,
            (habitId, dateStr) => this.toggleHabit(habitId, dateStr),
            (habitId) => this.deleteHabit(habitId)
        );
    }
    
    /**
     * Connect to Google Sheet
     */
    connectGoogleSheet() {
        const sheetIdInput = document.getElementById('sheetIdInput');
        const sheetId = sheetIdInput?.value.trim();
        
        if (sheetId) {
            saveConfig({
                sheetId,
                useGoogleSheets: true
            });
            document.getElementById('setupModal')?.classList.remove('show');
            this.loadAppData();
            this.renderDashboard();
            this.renderHabitGrid();
        } else {
            alert('Please enter a valid Google Sheet ID');
        }
    }
    
    /**
     * Use local storage instead of Google Sheets
     */
    useLocalStorage() {
        saveConfig({
            useGoogleSheets: false
        });
        document.getElementById('setupModal')?.classList.remove('show');
    }
}

