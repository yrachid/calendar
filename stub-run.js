require('value-box/path')(__dirname, ['/values']);
const moment = require('moment');

const { longStub, shortStub } = require('value-box');

const event = require('./event');

shortStub
  .items
  .filter(e => e.start)
  .map(event)
  .sort((a, b) => a.compare(b))
  .forEach(event => {

    console.log(event.name + Array(50 - event.name.length).join(' ') + event.display.start);

    console.log(event.display.durationRange.start + ' ~ ' + event.display.durationRange.end);

    console.log(event.duration + 'h');
    console.log('-----------------------------------------------------');

  });
