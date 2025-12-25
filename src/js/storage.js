/**
 * Storage management for habits and tracking data
 */
import { CONFIG } from './config.js';

/**
 * Save data to storage
 * @param {Object} data - Data object containing habits, trackingData, and currentWeekStart
 */
export function saveData(data) {
    if (CONFIG.useGoogleSheets && CONFIG.sheetId) {
        saveToGoogleSheets(data);
    } else {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    }
}

/**
 * Load data from storage
 * @returns {Object|null} Data object or null if not found
 */
export function loadData() {
    if (CONFIG.useGoogleSheets && CONFIG.sheetId) {
        return loadFromGoogleSheets();
    } else {
        const saved = localStorage.getItem(CONFIG.storageKey);
        return saved ? JSON.parse(saved) : null;
    }
}

/**
 * Load configuration from storage
 * @returns {Object} Configuration object
 */
export function loadConfig() {
    const savedConfig = localStorage.getItem(CONFIG.configKey);
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        Object.assign(CONFIG, config);
        return config;
    }
    return null;
}

/**
 * Save configuration to storage
 * @param {Object} config - Configuration object to save
 */
export function saveConfig(config) {
    Object.assign(CONFIG, config);
    localStorage.setItem(CONFIG.configKey, JSON.stringify(CONFIG));
}

/**
 * Google Sheets save (placeholder - requires API setup)
 * @param {Object} data - Data to save
 */
function saveToGoogleSheets(data) {
    // This would require Google Sheets API implementation
    // For now, fallback to localStorage
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    console.log('Google Sheets integration requires API setup. Using localStorage for now.');
}

/**
 * Google Sheets load (placeholder - requires API setup)
 * @returns {Object|null} Data object or null
 */
function loadFromGoogleSheets() {
    // This would require Google Sheets API implementation
    // For now, fallback to localStorage
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) {
        return JSON.parse(saved);
    }
    console.log('Google Sheets integration requires API setup. Using localStorage for now.');
    return null;
}

