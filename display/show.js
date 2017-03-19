const compact = require('./compact');
const comfortable = require('./comfortable');

const showModes = { compact, comfortable };

const formats = {
  dateTime: { LONG_DATE: 'DD/MM/YYYY' , COMPACT_DATE: 'DD/MM', HOUR: 'HH:mm' },
  string: { DURATION: '(%sh)' }
};

module.exports =
  filter =>
    showMode =>
      calendar => showModes[showMode](filter)(formats)(calendar);
