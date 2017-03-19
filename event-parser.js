require('value-box/path')(__dirname, ['/values']);
const moment = require('moment');

const { responseStub } = require('value-box');

responseStub
  .items
  .filter(e => e.summary)
  .forEach(event => {

    console.log(event.summary);

    const startTime = event.start ? event.start.date || event.start.dateTime || '' : '';
    console.log(startTime);

  });
