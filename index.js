require('value-box/path')(__dirname, ['/values']);
const { CALENDAR_ID } = require('value-box').calendarIds;

const calendar = require('googleapis').calendar('v3');
const authorize = require('./auth');
const chalk = require('chalk');

const datetime = str => {
  const a = (str || '').split('T');
  const date = a[0] || '';
  const time = ((a[1] || '').substring[0,8]) || 'ALL_DAY';
  return `${date} ${time} => `;
};


const merge = ({ original, accumulated = {}, change = {} }) =>
  ({ original, accumulated: Object.assign(accumulated, change) });

const resumir = e => ({ n: e.summary, d: datetime(e.start.dateTime || e.start.date), l: (e.location || 'Somewhere') });

authorize(auth => {

  console.log(CALENDAR_ID);

  calendar.events.list({ auth, calendarId: CALENDAR_ID }, (e, r) => {

    if (e) {
      return console.log(e);
    }

    console.log(r);

    // r.items
    //   .map( item => merge({ original: item, change: { name: item.summary } }) )
    //   .map( wrapped => merge(Object.assign(wrapped, { change: { description: wrapped.original.description } })))
    //   .map( wrapped => wrapped.accumulated )
    //   .forEach(i => console.log(i.name));

  });
});
