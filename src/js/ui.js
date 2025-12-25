/**
 * UI rendering and manipulation functions
 */
import { formatDate, getWeekDays } from './utils.js';

/**
 * Update progress circle
 * @param {number} percentage - Completion percentage (0-100)
 */
export function updateProgressCircle(percentage) {
    const circle = document.querySelector('.progress-ring-circle');
    if (!circle) return;
    
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
    circle.style.stroke = percentage >= 70 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444';
}

/**
 * Render habit grid
 * @param {Array} habits - Array of habit objects
 * @param {Object} trackingData - Tracking data object
 * @param {Date} currentWeekStart - Start date of current week
 * @param {Function} onToggleHabit - Callback when habit is toggled
 * @param {Function} onDeleteHabit - Callback when habit is deleted
 */
export function renderHabitGrid(habits, trackingData, currentWeekStart, onToggleHabit, onDeleteHabit) {
    const weekDays = getWeekDays(currentWeekStart);
    const gridBody = document.getElementById('habitGridBody');
    const headerRow = document.querySelector('#habitGrid thead tr');
    
    if (!gridBody || !headerRow) return;
    
    // Update header
    headerRow.innerHTML = '<th class="habit-name-col">Habit</th>';
    weekDays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
        headerRow.appendChild(th);
    });
    
    // Update current week display
    const weekEnd = new Date(weekDays[6]);
    const currentWeekEl = document.getElementById('currentWeek');
    if (currentWeekEl) {
        currentWeekEl.textContent = 
            `${weekDays[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    }
    
    // Render habits
    gridBody.innerHTML = '';
    
    if (habits.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 8;
        cell.style.textAlign = 'center';
        cell.style.padding = '40px';
        cell.style.color = 'var(--text-secondary)';
        cell.textContent = 'No habits yet. Add your first habit above to get started!';
        row.appendChild(cell);
        gridBody.appendChild(row);
    } else {
        habits.forEach(habit => {
            const row = document.createElement('tr');
            
            // Habit name cell with delete button
            const nameCell = document.createElement('td');
            nameCell.className = 'habit-name';
            const nameContainer = document.createElement('div');
            nameContainer.style.display = 'flex';
            nameContainer.style.justifyContent = 'space-between';
            nameContainer.style.alignItems = 'center';
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = habit.name;
            nameSpan.style.flex = '1';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-habit-btn';
            deleteBtn.style.cssText = 'background: none; border: none; color: var(--danger-color); font-size: 1.5rem; cursor: pointer; padding: 0 10px; opacity: 0.6; transition: opacity 0.2s;';
            deleteBtn.addEventListener('mouseenter', () => deleteBtn.style.opacity = '1');
            deleteBtn.addEventListener('mouseleave', () => deleteBtn.style.opacity = '0.6');
            deleteBtn.addEventListener('click', () => onDeleteHabit(habit.id));
            deleteBtn.title = 'Delete habit';
            
            nameContainer.appendChild(nameSpan);
            nameContainer.appendChild(deleteBtn);
            nameCell.appendChild(nameContainer);
            row.appendChild(nameCell);
            
            // Day cells
            weekDays.forEach(day => {
                const dateStr = formatDate(day);
                const cell = document.createElement('td');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'habit-checkbox';
                checkbox.checked = trackingData[habit.id] && trackingData[habit.id][dateStr] || false;
                checkbox.addEventListener('change', () => onToggleHabit(habit.id, dateStr));
                cell.appendChild(checkbox);
                row.appendChild(cell);
            });
            
            gridBody.appendChild(row);
        });
    }
    
    // Render weekly summary
    renderWeeklySummary(habits, trackingData, weekDays);
}

/**
 * Render weekly summary
 * @param {Array} habits - Array of habit objects
 * @param {Object} trackingData - Tracking data object
 * @param {Date[]} weekDays - Array of dates in the week
 */
function renderWeeklySummary(habits, trackingData, weekDays) {
    const summary = document.getElementById('weeklySummary');
    if (!summary) return;
    
    const weekDates = weekDays.map(d => formatDate(d));
    
    let totalHabits = habits.length;
    let totalPossible = totalHabits * 7;
    let totalCompleted = 0;
    
    habits.forEach(habit => {
        weekDates.forEach(dateStr => {
            if (trackingData[habit.id] && trackingData[habit.id][dateStr]) {
                totalCompleted++;
            }
        });
    });
    
    const completionRate = totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
    
    summary.innerHTML = `
        <div class="summary-stat-item">
            <div class="summary-stat-value">${totalHabits}</div>
            <div class="summary-stat-label">Total Habits</div>
        </div>
        <div class="summary-stat-item">
            <div class="summary-stat-value">${totalCompleted}</div>
            <div class="summary-stat-label">Completed This Week</div>
        </div>
        <div class="summary-stat-item">
            <div class="summary-stat-value">${completionRate}%</div>
            <div class="summary-stat-label">Completion Rate</div>
        </div>
    `;
}

/**
 * Render top habits list
 * @param {Object} habitStats - Object with habit statistics
 */
export function renderTopHabits(habitStats) {
    const topHabitsList = document.getElementById('topHabitsList');
    if (!topHabitsList) return;
    
    const habits = Object.values(habitStats);
    
    if (habits.length === 0) {
        topHabitsList.innerHTML = '<div style="text-align: center; color: var(--text-secondary); padding: 20px;">Add habits to see your top performers here!</div>';
        return;
    }
    
    // Sort habits by completion rate
    const sortedHabits = habits
        .map(habit => ({
            ...habit,
            percentage: habit.total > 0 ? Math.round((habit.completed / habit.total) * 100) : 0
        }))
        .sort((a, b) => b.percentage - a.percentage)
        .slice(0, 10);
    
    if (sortedHabits.length === 0) {
        topHabitsList.innerHTML = '<div style="text-align: center; color: var(--text-secondary); padding: 20px;">Start tracking habits to see your top performers!</div>';
        return;
    }
    
    topHabitsList.innerHTML = sortedHabits.map(habit => `
        <div class="habit-item">
            <span class="habit-item-name">${habit.name}</span>
            <span class="habit-item-percentage">${habit.percentage}%</span>
        </div>
    `).join('');
}

/**
 * Update dashboard statistics
 * @param {number} overallPercentage - Overall completion percentage
 * @param {number} completed - Number of completed habits
 * @param {number} remaining - Number of remaining habits
 */
export function updateDashboardStats(overallPercentage, completed, remaining) {
    const overallEl = document.getElementById('overall-percentage');
    const completedEl = document.getElementById('month-completed');
    const remainingEl = document.getElementById('month-remaining');
    
    if (overallEl) overallEl.textContent = `${overallPercentage}%`;
    if (completedEl) completedEl.textContent = completed;
    if (remainingEl) remainingEl.textContent = remaining;
    
    updateProgressCircle(overallPercentage);
}

