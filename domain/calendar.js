const event = require('./event');
const moment = require('moment');

module.exports = apiResponse => {

  console.log('Creating calendar...');

  const name = apiResponse.summary;
  const updated = moment(apiResponse.updated, moment.ISO_8601);

  const processedEvents =
    apiResponse.items
      .filter(e => e.start)
      .map(event)
      .sort((a, b) => a.compare(b));

  // TODO: Implement time filters (filter events of today, month, year, etc)
  const events = {
    all: () => processedEvents
  };

  console.log('Calendar ready...');

  return { name, updated, events };

};
