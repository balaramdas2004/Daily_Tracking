/**
 * Chart rendering and management using Chart.js
 */
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

let chartInstances = {};

/**
 * Render consistency chart (line graph)
 * @param {Date[]} monthDays - Array of dates in the month
 * @param {Array} habits - Array of habit objects
 * @param {Object} trackingData - Tracking data object
 */
export function renderConsistencyChart(monthDays, habits, trackingData) {
    const ctx = document.getElementById('consistencyChart');
    if (!ctx) return;
    
    // Calculate daily completion rates
    const dailyData = monthDays.map(day => {
        const dateStr = day.toISOString().split('T')[0];
        let completed = 0;
        habits.forEach(habit => {
            if (trackingData[habit.id] && trackingData[habit.id][dateStr]) {
                completed++;
            }
        });
        return habits.length > 0 ? (completed / habits.length) * 100 : 0;
    });
    
    if (chartInstances.consistency) {
        chartInstances.consistency.destroy();
    }
    
    chartInstances.consistency = new Chart(ctx, {
        type: 'line',
        data: {
            labels: monthDays.map(d => d.getDate()),
            datasets: [{
                label: 'Daily Consistency %',
                data: dailyData,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Render weekly performance chart (bars)
 * @param {Array} habits - Array of habit objects
 * @param {Object} trackingData - Tracking data object
 * @param {Function} getWeekStart - Function to get week start
 */
export function renderWeeklyChart(habits, trackingData, getWeekStart) {
    const ctx = document.getElementById('weeklyChart');
    if (!ctx) return;
    
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    
    // Get all weeks in current month
    const weeks = [];
    let currentWeek = getWeekStart(monthStart);
    
    while (currentWeek.getMonth() === now.getMonth()) {
        weeks.push(new Date(currentWeek));
        currentWeek = new Date(currentWeek);
        currentWeek.setDate(currentWeek.getDate() + 7);
    }
    
    const weeklyData = weeks.map(weekStart => {
        let completed = 0;
        let total = 0;
        
        for (let i = 0; i < 7; i++) {
            const day = new Date(weekStart);
            day.setDate(day.getDate() + i);
            
            if (day.getMonth() === now.getMonth()) {
                const dateStr = day.toISOString().split('T')[0];
                habits.forEach(habit => {
                    total++;
                    if (trackingData[habit.id] && trackingData[habit.id][dateStr]) {
                        completed++;
                    }
                });
            }
        }
        
        return total > 0 ? (completed / total) * 100 : 0;
    });
    
    if (chartInstances.weekly) {
        chartInstances.weekly.destroy();
    }
    
    chartInstances.weekly = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: weeks.map((w, i) => `Week ${i + 1}`),
            datasets: [{
                label: 'Weekly Performance %',
                data: weeklyData,
                backgroundColor: '#8b5cf6',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

/**
 * Render completion chart (doughnut)
 * @param {number} completed - Number of completed habits
 * @param {number} remaining - Number of remaining habits
 */
export function renderCompletionChart(completed, remaining) {
    const ctx = document.getElementById('completionChart');
    if (!ctx) return;
    
    if (chartInstances.completion) {
        chartInstances.completion.destroy();
    }
    
    chartInstances.completion = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [completed, remaining],
                backgroundColor: ['#10b981', '#e2e8f0'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

/**
 * Destroy all chart instances
 */
export function destroyAllCharts() {
    Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
    });
    chartInstances = {};
}

