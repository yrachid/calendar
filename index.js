require('value-box/path')(__dirname, ['/values']);
const { CALENDAR_ID } = require('value-box').calendarIds;

const calendar = require('googleapis').calendar('v3');
const authorize = require('./auth');
const chalk = require('chalk');

authorize(auth => {

  calendar.events.list({ auth, calendarId: CALENDAR_ID }, (error, response) => {

    if (error) {
      return console.log(error);
    }

    console.log(`Calendar name: ${response.summary}`);
    console.log(`Last update: ${response.updated}`);

  });
});
