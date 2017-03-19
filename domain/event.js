const moment = require('moment');

module.exports = event => {

  const ONE_DAY_IN_HOURS = 24;
  const DURATION_DECIMAL_PLACES = 2;

  const date = wrapper => moment(wrapper.date || wrapper.dateTime, moment.ISO_8601);

  const name = event.summary;
  const start = date(event.start);
  const end = date(event.end);
  const durationInHours = parseFloat(moment.duration(end.diff(start)).asHours()).toFixed(DURATION_DECIMAL_PLACES);
  const endsOnSameDay = durationInHours < ONE_DAY_IN_HOURS;

  const compare = event => start.diff(event.start);

  return { name, start, end, durationInHours, endsOnSameDay, compare };

};
