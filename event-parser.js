require('value-box/path')(__dirname, ['/values']);
const moment = require('moment');

const { longStub, shortStub } = require('value-box');

const date = wrapper => wrapper.date || wrapper.dateTime;

shortStub
  .items
  .filter(e => e.start)
  .map( e => ({
    name: e.summary,
    start: moment(date(e.start), moment.ISO_8601),
    end: moment(date(e.end), moment.ISO_8601)
  }))
  .forEach(event => {

    console.log(event.name + Array(50 - event.name.length).join(' ') + event.start.format('DD/MM/YYYY'));
    console.log('-----------------------------------------------------');
    // console.log('   ' + event.start.format('DD/MM/YYYY') + ' ~ ' + event.end.format('DD/MM/YYYY'));
    // console.log('\n');

    // const startTime = event.start ? event.start.date || event.start.dateTime || '' : '';
    // console.log(startTime);

  });
