/**
 * Utility functions for date operations and formatting
 */

/**
 * Get week start (Monday)
 * @param {Date} date - The date to get week start for
 * @returns {Date} The Monday of the week
 */
export function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust to Monday
    return new Date(d.setDate(diff));
}

/**
 * Format date as YYYY-MM-DD
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
    return date.toISOString().split('T')[0];
}

/**
 * Get date from YYYY-MM-DD string
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {Date} Parsed date object
 */
export function parseDate(dateStr) {
    return new Date(dateStr + 'T00:00:00');
}

/**
 * Get days of a week starting from weekStart
 * @param {Date} weekStart - The Monday of the week
 * @returns {Date[]} Array of 7 dates
 */
export function getWeekDays(weekStart) {
    const days = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(date.getDate() + i);
        days.push(date);
    }
    return days;
}

/**
 * Get all days in current month
 * @returns {Date[]} Array of all dates in the current month
 */
export function getMonthDays() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const days = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
    }
    return days;
}

