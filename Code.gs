function isCreated(events, title) {
  for (var d = 0 ; d < events.length ; d++) {
    if (events[d].getTitle() == title)
      return (true);
  }
  return (false);
}

function main() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var calendarId = sheet.getRange("ToBuy!C1").getValue();
  var calendar = CalendarApp.getCalendarById(calendarId);

  var data = sheet.getRange("ToBuy!A3:C50").getValues();
  for (var i = 0 ; i < data.length ; i++) {
    if (data[i][2]) {
      var day = new Date(data[i][2]);
      var events = calendar.getEventsForDay(day);
      if (!isCreated(events, data[i][0] + " " + data[i][1])) {
        calendar.createAllDayEvent(data[i][0] + " " + data[i][1], day);
      }
    }
  }
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Add to Calendar').addItem('Add Events to calendar', 'main').addToUi();
}
