# G-Sheet-to-Calendar
Adding event to google calendar from google sheets with app script


## Run it

First open the script from your sheet with `Tools / Script editor`.

Edit the the calendar ID in your sheet and in the script depending were you put in in the sheet

`var calendarId = sheet.getRange(<cell>).getValue();`

You can find the calendar ID in your google calendar parameters.

Then run the onOpen function from the script interface.

`Add to calendar` will be add to your sheet interface. You can now run it by clicking on `Add to calendar / Add Events to Calendar`

## Overview
I use google sheet to organise my collection of manga. I also have a column to write the next releases.
This script is made to add this releases as event to my google calendar.

My sheet is in this format :

|Name   |Number   |Date   |
--------|---------|--------
|Name 1 | Number 1|Date 1 |
|Name 2 | Number 2|Date 2 |
