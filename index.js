require('value-box/path')(__dirname, ['/values']);
const { CALENDAR_ID } = require('value-box').calendarIds;

const api = require('googleapis').calendar('v3');
const authorize = require('./auth');
const calendar = require('./domain/calendar');
const comfortable = require('./show-modes/comfortable');

authorize(auth => {

  api.events.list({ auth, calendarId: CALENDAR_ID }, (error, response) => {

    if (error) {
      return console.log(error);
    }

    comfortable('all')(calendar(response));

  });
});
