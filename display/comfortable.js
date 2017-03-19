const chalk = require('chalk');

module.exports = filter => formats => calendar => {

  const { HOUR, LONG_DATE, COMPACT_DATE } = formats.dateTime;
  const { DURATION } = formats.string;

  const title = `${calendar.name} updated ${calendar.updated.fromNow()}`;

  console.log(title);

  console.log(Array(title.length).join('='));

  const biggestEventName =
    calendar
      .events[filter]()
      .map(event => event.name.length)
      .reduce( (biggest, current) => current > biggest ? current : biggest);

  calendar.events[filter]().forEach(event => {

    const eventNameSpan = Array(biggestEventName - event.name.length).join(' ');

    const eventDetails = `${event.name}${eventNameSpan} ${chalk.yellow(event.start.format(LONG_DATE))}`;

    console.log(eventDetails);

    const durationFormat = event.endsOnSameDay ? HOUR : COMPACT_DATE;

    console.log(`${chalk.green(event.start.format(durationFormat))} ~ ${event.end.format(durationFormat)} ${DURATION.replace('%s', event.durationInHours)}`);

    console.log(Array(eventDetails.length).join('-'));
  });
};
