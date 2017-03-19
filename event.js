const moment = require('moment');

module.exports = event => {

  const BR_DATE_FORMAT = 'DD/MM/YYYY';
  const HOUR_FORMAT = 'HH:mm';
  const ONE_DAY_IN_HOURS = 24;

  const date = wrapper => moment(wrapper.date || wrapper.dateTime, moment.ISO_8601);

  const name = event.summary;
  const start = date(event.start);
  const end = date(event.end);
  const duration = moment.duration(end.diff(start)).asHours();
  const endsOnSameDay = duration < ONE_DAY_IN_HOURS;

  const durationRangeFormat = endsOnSameDay ? HOUR_FORMAT : BR_DATE_FORMAT;

  const display = {
    start: start.format(BR_DATE_FORMAT),
    durationRange: {
      start: start.format(durationRangeFormat),
      end: end.format(durationRangeFormat)
    }
  };

  const compare = event => start.diff(event.start);

  return { name, start, end, duration, endsOnSameDay, display, compare };

};
