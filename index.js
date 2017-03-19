require('value-box/path')(__dirname, ['/values']);
const { calendarIds } = require('value-box');

const api = require('googleapis').calendar('v3');
const authorize = require('./auth');
const calendar = require('./domain/calendar');
const show = require('./display/show');

authorize(auth => {

  api.events.list({ auth, calendarId: calendarIds.CALENDAR_ID, maxResults: 2500 }, (error, response) => {

    if (error) {
      return console.log(error);
    }

    show('all')('compact')(calendar(response));

  });
});
