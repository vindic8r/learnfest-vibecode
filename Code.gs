// Weekly Work Dashboard - Server-side code
// Reads Google Sheet and serves dashboard UI

var SHEET_ID = '12qtf9DgfzN9RdsLmhxUs7DaZe7Uzzjc_O2ISpykfUHU';

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Weekly Work Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Reads all data from the sheet and returns structured data for the dashboard
 * Returns: { rows: [...], projects: [...], weeks: [...] }
 */
function getData() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheets()[0];
  var values = sheet.getDataRange().getValues();
  
  if (!values || values.length < 2) {
    return { rows: [], projects: [], weeks: [] };
  }

  var headers = values[0].map(function(h) { 
    return (h || '').toString().trim(); 
  });
  
  var rows = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var obj = {};
    
    for (var j = 0; j < headers.length; j++) {
      var header = headers[j];
      var value = row[j];
      
      switch(header) {
        case 'Week of':
          if (value instanceof Date) {
            obj.week = Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
          } else {
            obj.week = value ? value.toString() : '';
          }
          break;
          
        case 'Project or Initiative':
          obj.project = value ? value.toString() : '';
          break;
          
        case 'Tasks':
          obj.tasks = value ? value.toString() : '';
          break;
          
        case '% of Capacity':
          var num = parseFloat(value);
          obj.capacity = isNaN(num) ? 0 : num;
          break;
          
        case 'Completed':
          var status = value ? value.toString().trim().toLowerCase() : '';
          obj.completed = status === 'yes' || status === 'true';
          obj.completedText = value ? value.toString() : '';
          break;
          
        case 'Blockers':
          obj.blockers = value ? value.toString() : '';
          break;
          
        default:
          obj[header] = value;
      }
    }
    rows.push(obj);
  }

  // Extract unique projects and weeks for filters
  var projectsSet = new Set(rows.map(function(r) { return r.project; }));
  var weeksSet = new Set(rows.map(function(r) { return r.week; }));
  
  return {
    rows: rows,
    projects: Array.from(projectsSet).filter(Boolean).sort(),
    weeks: Array.from(weeksSet).filter(Boolean).sort()
  };
}