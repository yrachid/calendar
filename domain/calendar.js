const event = require('./event');
const moment = require('moment');

module.exports = apiResponse => {

  const name = apiResponse.summary;
  const updated = moment(apiResponse.updated, moment.ISO_8601);

  const processedEvents =
    apiResponse.items
      .filter(e => e.start)
      .map(event)
      .sort((a, b) => a.compare(b));

  const events = {
    all: () => processedEvents
  };

  return { name, updated, events };

};
