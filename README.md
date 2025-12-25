# Habit Tracker - Stay Consistent

A minimal, distraction-free habit tracking system that helps you build consistency and track your daily habits with beautiful visualizations and progress insights.

## Features

### 📊 Monthly Dashboard
- **Overall Consistency**: Visual progress circle showing your overall completion rate
- **Daily Consistency Line Graph**: Track your daily habit completion trends
- **Weekly Performance Bars**: Compare your performance week-to-week
- **Monthly Completion vs Remaining**: See the big picture of your progress
- **Top 10 Daily Habits**: Identify your strongest habits at a glance
- **Global Progress**: Quick stats showing completed vs remaining habits

### ✅ Daily Habit Grid
- **Weekly View**: Clean, organized grid showing one week at a time
- **Easy Tracking**: Simply tick checkboxes to mark completed habits
- **Automatic Updates**: Progress bars and totals update instantly
- **Week Navigation**: Navigate between weeks to track historical data
- **Weekly Summary**: See your completion rate and stats for the current week

### 🎯 Key Benefits
- **Stay Accountable**: Visual feedback keeps you motivated
- **Identify Patterns**: See your strongest and weakest habits
- **Track Progress**: Monitor consistency over time
- **Distraction-Free**: Minimal design focused on what matters
- **Organized**: Everything in one place, easy to use

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to the URL shown in the terminal

5. **First Time Setup**:
   - Click "Use Local Storage (No Setup Required)" in the setup modal
   - Start adding habits and tracking your progress!

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
daily tracker/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore              # Git ignore rules
├── src/
│   ├── main.js             # Application entry point
│   ├── styles/
│   │   └── main.css        # All styles
│   └── js/
│       ├── app.js          # Main application class
│       ├── config.js       # Configuration constants
│       ├── storage.js      # Data storage management
│       ├── utils.js         # Utility functions
│       ├── charts.js        # Chart rendering logic
│       └── ui.js           # UI rendering functions
└── README.md               # This file
```

## Usage

### Adding Habits
1. Type a habit name in the "Add a new habit..." input field
2. Click "Add Habit" or press Enter
3. Your new habit will appear in the grid

### Tracking Habits
1. Navigate to the week you want to track
2. Click the checkbox for each habit you complete each day
3. Your progress updates automatically

### Viewing Progress
- **Dashboard**: Scroll to the top to see your monthly overview
- **Weekly Summary**: Check the bottom of the daily grid for weekly stats
- **Charts**: All charts update in real-time as you track habits

### Navigating Weeks
- Use the "Previous Week" and "Next Week" buttons to navigate
- The current week is displayed in the center

### Deleting Habits
- Click the "×" button next to any habit name to delete it
- Confirm the deletion when prompted

## Browser Compatibility

Works best in modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Data Storage

### Local Storage (Default)
- Data is stored in your browser's localStorage
- Data persists between sessions
- Data is private to your browser
- No setup required

### Google Sheets (Future)
- Data stored in your Google Sheet
- Accessible from any device
- Can be shared with others
- Requires API setup (see below)

## Google Sheets Integration (Advanced)

For Google Sheets integration, you'll need to set up the Google Sheets API:

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Google Sheets API

2. **Create Credentials**:
   - Go to "Credentials" in the API & Services section
   - Create an API Key (for public use) or OAuth 2.0 (for private sheets)
   - Download your credentials

3. **Create a Google Sheet**:
   - Create a new Google Sheet
   - Note the Sheet ID from the URL (between `/d/` and `/edit`)
   - Share the sheet with your service account email (if using service account)

4. **Configure the App**:
   - Enter your Sheet ID in the setup modal
   - The app will connect to your sheet

**Note**: Full Google Sheets integration requires additional API setup in the code. The current version uses localStorage as a fallback, which works perfectly for personal use.

## Customization

### Changing Colors
Edit the CSS variables in `src/styles/main.css`:
```css
:root {
    --primary-color: #6366f1;
    --success-color: #10b981;
    /* ... other colors */
}
```

### Modifying Behavior
- Edit `src/js/app.js` for main application logic
- Edit `src/js/config.js` for configuration
- Edit `src/js/storage.js` for storage behavior

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Organization

The codebase is organized into modules:

- **app.js**: Main application class that orchestrates everything
- **config.js**: Configuration constants
- **storage.js**: Handles data persistence (localStorage/Google Sheets)
- **utils.js**: Date formatting and utility functions
- **charts.js**: Chart.js integration and rendering
- **ui.js**: DOM manipulation and UI updates

## Tips for Success

1. **Start Small**: Begin with 3-5 habits
2. **Be Consistent**: Track every day, even if you miss
3. **Review Weekly**: Check your dashboard weekly to see progress
4. **Adjust as Needed**: Remove habits that aren't working, add new ones
5. **Stay Accountable**: The visual feedback helps maintain motivation

## Troubleshooting

### Development Server Won't Start
- Make sure Node.js is installed (`node --version`)
- Delete `node_modules` and run `npm install` again
- Check that port 3000 is not in use

### Data Not Saving
- Check that your browser allows localStorage
- Try clearing browser cache and reloading
- Make sure JavaScript is enabled

### Charts Not Displaying
- Ensure dependencies are installed (`npm install`)
- Check browser console for errors
- Try refreshing the page

### Setup Modal Keeps Appearing
- Click "Use Local Storage" to dismiss it permanently
- Or configure Google Sheets if you prefer

## Future Enhancements

- Full Google Sheets API integration
- Export data to CSV
- Habit streaks tracking
- Reminder notifications
- Mobile app version
- Habit categories/tags
- Custom date ranges for charts
- Dark mode
- Data import/export

## License

Free to use for personal projects.

## Support

For issues or questions, check the code comments or modify as needed for your use case.

---

**Remember**: Consistency is key! Track your habits daily and watch your progress grow. 📈
