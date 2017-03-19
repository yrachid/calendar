const chalk = require('chalk');

module.exports = filter => formats => calendar => {

  const { HOUR, LONG_DATE } = formats.dateTime;
  const { DURATION } = formats.string;

  const title = `${calendar.name} updated ${calendar.updated.fromNow()}`;

  console.log(title);

  console.log(Array(title.length).join('='));

  calendar.events[filter]().forEach(event => {

    const range = event.endsOnSameDay
      ? `${chalk.green(event.start.format(HOUR))} ~ ${chalk.green(event.end.format(HOUR))} ${DURATION.replace('%s', event.durationInHours)}`
      : '';

    console.log(`${event.start.format(LONG_DATE)} - ${range} ${chalk.yellow(event.name)} `);
  });
};
