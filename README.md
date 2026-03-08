<div align="center">

# 🎯 Habit Tracker - Stay Consistent

**A minimal, distraction-free habit tracking system that helps you build consistency and track your daily habits with beautiful visualizations and progress insights.**

[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](https://github.com/balaramdas2004/Daily_Tracking/issues) • [💡 Request Feature](https://github.com/balaramdas2004/Daily_Tracking/issues)

</div>

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📸 Screenshots](#-screenshots)
- [💻 Installation](#-installation)
- [📖 Usage Guide](#-usage-guide)
- [🏗️ Project Structure](#️-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🔧 Development](#-development)
- [🌐 Browser Support](#-browser-support)
- [💾 Data Storage](#-data-storage)
- [🎨 Customization](#-customization)
- [❓ FAQ](#-faq)
- [🛣️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 📊 **Monthly Dashboard**
A comprehensive overview of your habit tracking progress with beautiful visualizations:

- 🎯 **Overall Consistency** - Visual progress circle showing your overall completion rate
- 📈 **Daily Consistency Line Graph** - Track your daily habit completion trends over time.
- 📊 **Weekly Performance Bars** - Compare your performance week-to-week at a glance
- 🍩 **Monthly Completion vs Remaining** - See the big picture with an intuitive doughnut chart
- 🏆 **Top 10 Daily Habits** - Identify your strongest habits ranked by completion rate
- 📉 **Global Progress Stats** - Quick stats showing completed vs remaining habits

### ✅ **Daily Habit Grid**
The main tracking interface designed for simplicity and efficiency:

- 📅 **Weekly View** - Clean, organized grid showing one week at a time
- ☑️ **Easy Tracking** - Simply tick checkboxes to mark completed habits
- ⚡ **Automatic Updates** - Progress bars and totals update instantly in real-time
- ⬅️➡️ **Week Navigation** - Navigate between weeks to track historical data
- 📋 **Weekly Summary** - See your completion rate and stats for the current week
- 🗑️ **Habit Management** - Add and delete habits with ease

### 🎯 **Key Benefits**

| Benefit | Description |
|---------|-------------|
| 🎯 **Stay Accountable** | Visual feedback keeps you motivated and on track |
| 📊 **Identify Patterns** | See your strongest and weakest habits at a glance |
| 📈 **Track Progress** | Monitor consistency over time with detailed analytics |
| 🎨 **Distraction-Free** | Minimal design focused on what matters most |
| 📱 **Organized** | Everything in one place, easy to use and navigate |

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

### Installation

<details>
<summary>📦 Click to expand installation steps</summary>

1. **Clone the repository**
   ```bash
   git clone https://github.com/balaramdas2004/Daily_Tracking.git
   cd Daily_Tracking
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to the URL shown in the terminal

5. **First Time Setup**
   - Click **"Use Local Storage (No Setup Required)"** in the setup modal
   - Start adding habits and tracking your progress! 🎉

</details>

### 🏗️ Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory, ready to deploy!

---

## 📸 Screenshots

> 📝 *Screenshots coming soon! Add your app screenshots here to showcase the beautiful UI.*

---

## 📖 Usage Guide

### ➕ Adding Habits

1. Type a habit name in the **"Add a new habit..."** input field
2. Click **"Add Habit"** or press `Enter`
3. Your new habit will appear in the grid immediately ✨

### ✅ Tracking Habits

1. Navigate to the week you want to track using the navigation buttons
2. Click the checkbox for each habit you complete each day
3. Your progress updates automatically - watch the charts animate! 📊

### 📊 Viewing Progress

- **📈 Dashboard**: Scroll to the top to see your monthly overview with all charts
- **📋 Weekly Summary**: Check the bottom of the daily grid for weekly stats
- **🔄 Real-time Updates**: All charts update instantly as you track habits

### ⬅️➡️ Navigating Weeks

- Use the **"← Previous Week"** and **"Next Week →"** buttons to navigate
- The current week range is displayed in the center
- Navigate to any week to track or review historical data

### 🗑️ Deleting Habits

- Click the **"×"** button next to any habit name to delete it
- Confirm the deletion when prompted
- ⚠️ **Note**: All tracking data for that habit will be permanently deleted

---

## 🏗️ Project Structure

```
daily tracker/
├── 📄 index.html              # Main HTML entry point
├── 📦 package.json            # Dependencies and npm scripts
├── ⚙️ vite.config.js          # Vite configuration
├── 🚫 .gitignore              # Git ignore rules
├── 📁 public/                 # Static assets directory
│   └── .gitkeep
├── 📁 src/
│   ├── 🚀 main.js             # Application entry point
│   ├── 📁 styles/
│   │   └── 🎨 main.css        # All styles and themes
│   └── 📁 js/
│       ├── 🎯 app.js          # Main application class
│       ├── ⚙️ config.js       # Configuration constants
│       ├── 💾 storage.js      # Data storage management
│       ├── 🛠️ utils.js        # Utility functions
│       ├── 📊 charts.js       # Chart rendering logic
│       └── 🎨 ui.js           # UI rendering functions
└── 📖 README.md               # This file
```

---

## ⚙️ Configuration

### Environment Variables

Currently, the app uses localStorage by default. For Google Sheets integration, you'll need to configure API credentials (see [Google Sheets Integration](#-google-sheets-integration-advanced) section).

### Customization Options

<details>
<summary>🎨 Click to expand customization options</summary>

#### Changing Colors

Edit the CSS variables in `src/styles/main.css`:

```css
:root {
    --primary-color: #6366f1;      /* Primary brand color */
    --success-color: #10b981;       /* Success/completion color */
    --warning-color: #f59e0b;       /* Warning color */
    --danger-color: #ef4444;        /* Danger/delete color */
    /* ... customize more colors */
}
```

#### Modifying Behavior

- **`src/js/app.js`** - Main application logic and event handlers
- **`src/js/config.js`** - Configuration constants and settings
- **`src/js/storage.js`** - Storage behavior and data persistence

</details>

---

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server with hot module replacement |
| `npm run build` | 📦 Build for production (outputs to `dist/`) |
| `npm run preview` | 👀 Preview production build locally |

### Code Organization

The codebase is organized into clean, modular components:

| Module | Purpose |
|--------|---------|
| **`app.js`** | Main application class that orchestrates everything |
| **`config.js`** | Configuration constants and settings |
| **`storage.js`** | Handles data persistence (localStorage/Google Sheets) |
| **`utils.js`** | Date formatting and utility functions |
| **`charts.js`** | Chart.js integration and rendering logic |
| **`ui.js`** | DOM manipulation and UI update functions |

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |

---

## 💾 Data Storage

### 🗄️ Local Storage (Default)

- ✅ **No Setup Required** - Works out of the box
- 🔒 **Private** - Data stored in your browser only
- 💾 **Persistent** - Data persists between sessions
- ⚡ **Fast** - Instant save/load operations

### 📊 Google Sheets (Future)

- 🌐 **Accessible Anywhere** - Access from any device
- 👥 **Shareable** - Share with others if needed
- ☁️ **Cloud Backup** - Automatic cloud backup
- ⚙️ **Requires Setup** - Needs API configuration (see below)

### 🔗 Google Sheets Integration (Advanced)

<details>
<summary>📋 Click to expand Google Sheets setup instructions</summary>

For Google Sheets integration, you'll need to set up the Google Sheets API:

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Google Sheets API

2. **Create Credentials**
   - Go to "Credentials" in the API & Services section
   - Create an API Key (for public use) or OAuth 2.0 (for private sheets)
   - Download your credentials

3. **Create a Google Sheet**
   - Create a new Google Sheet
   - Note the Sheet ID from the URL (between `/d/` and `/edit`)
   - Share the sheet with your service account email (if using service account)

4. **Configure the App**
   - Enter your Sheet ID in the setup modal
   - The app will connect to your sheet

> ⚠️ **Note**: Full Google Sheets integration requires additional API setup in the code. The current version uses localStorage as a fallback, which works perfectly for personal use.

</details>

---

## 🎨 Customization

### Theme Customization

Customize the look and feel by editing CSS variables in `src/styles/main.css`:

```css
:root {
    --primary-color: #6366f1;      /* Change primary color */
    --success-color: #10b981;       /* Change success color */
    --bg-color: #f8fafc;            /* Change background */
    /* ... and more */
}
```

### Feature Customization

- Modify habit tracking logic in `src/js/app.js`
- Adjust chart configurations in `src/js/charts.js`
- Customize UI components in `src/js/ui.js`

---

## ❓ FAQ

<details>
<summary>🔍 Click to expand FAQ</summary>

### Q: Why is my data not saving?

**A:** Make sure your browser allows localStorage. Try clearing browser cache and reloading, or check if JavaScript is enabled.

### Q: The charts are not displaying. What should I do?

**A:** Ensure dependencies are installed (`npm install`). Check the browser console for errors and try refreshing the page.

### Q: Can I use this offline?

**A:** Yes! Once loaded, the app works offline using localStorage. Just make sure to load it once while online.

### Q: How do I backup my data?

**A:** Currently, data is stored in browser localStorage. For backup, you can export data (feature coming soon) or use Google Sheets integration.

### Q: Can I track habits for multiple months?

**A:** Yes! Navigate between weeks to track habits across different months. The dashboard shows the current month's data.

</details>

---

## 🛣️ Roadmap

### 🎯 Upcoming Features

- [ ] 🔐 Full Google Sheets API integration
- [ ] 📥 Export data to CSV/JSON
- [ ] 🔥 Habit streaks tracking
- [ ] 🔔 Reminder notifications
- [ ] 📱 Mobile app version
- [ ] 🏷️ Habit categories/tags
- [ ] 📅 Custom date ranges for charts
- [ ] 🌙 Dark mode
- [ ] 📤 Data import/export
- [ ] 📊 Advanced analytics
- [ ] 🎯 Goal setting and tracking

### 💡 Have a Feature Request?

[Open an issue](https://github.com/balaramdas2004/Daily_Tracking/issues) and let us know what you'd like to see!

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔀 Open a Pull Request

---

## 💡 Tips for Success

> 💪 **Start Small** - Begin with 3-5 habits to build momentum
> 
> 📅 **Be Consistent** - Track every day, even if you miss some habits
> 
> 📊 **Review Weekly** - Check your dashboard weekly to see progress
> 
> 🔄 **Adjust as Needed** - Remove habits that aren't working, add new ones
> 
> 🎯 **Stay Accountable** - The visual feedback helps maintain motivation

---

## 🐛 Troubleshooting

### Development Server Won't Start

- ✅ Make sure Node.js is installed (`node --version`)
- ✅ Delete `node_modules` and run `npm install` again
- ✅ Check that port 3000 is not in use

### Data Not Saving

- ✅ Check that your browser allows localStorage
- ✅ Try clearing browser cache and reloading
- ✅ Make sure JavaScript is enabled

### Charts Not Displaying

- ✅ Ensure dependencies are installed (`npm install`)
- ✅ Check browser console for errors
- ✅ Try refreshing the page

### Setup Modal Keeps Appearing

- ✅ Click "Use Local Storage" to dismiss it permanently
- ✅ Or configure Google Sheets if you prefer

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects!

---

## ⭐ Show Your Support

If you find this project helpful, please consider giving it a ⭐ on GitHub!

---

<div align="center">

**Remember**: Consistency is key! Track your habits daily and watch your progress grow. 📈

Made with ❤️ by [balaramdas2004](https://github.com/balaramdas2004)

[⬆ Back to Top](#-habit-tracker---stay-consistent)

</div>
