# D&D Themed Weekly Work Dashboard

A fantasy-themed Google Apps Script dashboard for tracking weekly work, projects, and task completion with interactive charts and D&D 5e API theming.

## Project Overview

**Status**: Complete & Deployed  
**Created**: November 2025  
**Tech Stack**: Google Apps Script, HTML5, CSS3, Chart.js v4.4.0  
**Sheet ID**: `12qtf9DgfzN9RdsLmhxUs7DaZe7Uzzjc_O2ISpykfUHU`

## Features

### Core Functionality
- **Real-time Data Sync**: Reads from Google Sheet with automatic updates
- **Interactive Filtering**:
  - Filter by Campaign (Project)
  - Filter by Quest Status (Completed/In Progress)
  - Full-text search across quests and obstacles
- **Dynamic Charts**:
  - Quest Distribution Across Realms (stacked bar chart by week)
  - Battle Victories (doughnut chart for completion status)
  - Realm Distribution (pie chart for campaign breakdown)
- **Sortable Table**: Click column headers to sort Adventure Chronicles
- **Responsive Design**: Works on desktop and mobile devices

### Theme System
- **Light/Dark Realm Modes**: Toggle between parchment and dungeon themes
- **Theme Persistence**: User preference saved to localStorage
- **D&D Color Palette**:
  - Blood Red (#8b0000) - Primary actions
  - Forest Green (#1a472a) - Success/Completed quests
  - Dark Golden (#b8860b) - Warnings/Obstacles
  - Maroon (#800000) - Errors/Not completed
  - Aged Gold text on dark parchment backgrounds

### Typography
- **Display Font**: MedievalSharp (titles, buttons, headers)
- **Body Font**: Crimson Pro (readable classical serif)
- **Optimized Sizing**: Improved legibility over default decorative fonts

### Visual Assets
- Parchment textures from transparenttextures.com
- Medieval-styled cards with borders and shadows
- Scroll-like UI elements with aging effects
- Fantasy-themed icons (⚔️ 🏰 📜 🗺️)

## Sheet Requirements

Your Google Sheet must have the following columns (case-sensitive):
1. **Week of** - Date or text (e.g., "2025-W45")
2. **Project or Initiative** - Campaign/project name
3. **Tasks** - Task description or ID
4. **% of Capacity** - Numeric percentage (0-100)
5. **Completed** - "Yes" or "No"
6. **Blockers** - Issues preventing completion or "-"

## Deployment Instructions

### 1. Copy the Code
- **Code.gs**: Contains server-side data fetching logic
- **index.html**: Contains all UI, styling, and client-side logic

### 2. Update Sheet ID
In `Code.gs`, update the SHEET_ID variable:
```javascript
var SHEET_ID = '12qtf9DgfzN9RdsLmhxUs7DaZe7Uzzjc_O2ISpykfUHU'; // Your sheet ID here
```

### 3. Deploy as Web App
1. In Google Apps Script editor: **Deploy** → **New Deployment**
2. Select **Type**: "Web app"
3. Set **Execute as**: Your Google account
4. Set **Who has access**: "Anyone" or "Anyone with the link"
5. Click **Deploy** and copy the deployment URL

### 4. Access Your Dashboard
Open the deployment URL in a browser. The dashboard will:
- Automatically fetch data from your sheet
- Display all records with charts and filters
- Persist theme preference in browser storage

## Customization

### Change Colors
Edit CSS variables in `index.html`:
```css
:root {
  --primary: #8b0000;          /* Blood Red */
  --success: #1a472a;          /* Forest Green */
  --warning: #b8860b;          /* Dark Golden */
  --error: #800000;            /* Maroon */
}
```

### Change Fonts
Modify font imports and variables:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600');

:root {
  --font-display: 'YourFont', cursive;
  --font-body: 'YourSerif', Georgia, serif;
}
```

### Rename Labels
Change D&D terminology in HTML:
- "Campaigns" → "Projects"
- "Quests" → "Tasks"
- "Power Level" → "Capacity"
- "Quest Status" → "Completion Status"

## Technical Details

### Data Flow
1. `getData()` in Code.gs reads all sheet data
2. Transforms sheet columns into structured objects
3. Returns filtered project list and all rows
4. Client-side JavaScript filters and displays data
5. Chart.js renders dynamic visualizations

### Filtering & Sorting
- Client-side filtering for instant feedback
- Sorting by clicking table headers
- Search indexes across projects, tasks, and blockers
- Debounced search (300ms delay) for performance

### Chart Configuration
- **Bar Chart**: Stacked by project, grouped by week
- **Doughnut Chart**: Completion ratio visualization
- **Pie Chart**: Project workload distribution
- All charts respect theme colors and fonts

## Known Limitations

- Data is read-only (dashboard doesn't update sheets)
- Maximum recommended 500 rows for smooth performance
- Search operates on client-side data only
- No offline functionality (requires sheet access)

## Future Enhancements

- Data editing directly from dashboard
- Email summaries and notifications
- Historical trend analysis
- Team capacity planning views
- Custom date range filtering
- Export to CSV/PDF reports

## Support & Maintenance

**Archived**: November 10, 2025  
**Archive Location**: `/Users/vscalabrino/Documents/learnfest-vibecode-archive/dnd-dashboard/`

For issues or questions about deployment, refer to:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [D&D 5e API](https://www.dnd5eapi.co/)

---

*"Your work has been chronicled in the annals of legend."* ⚔️
