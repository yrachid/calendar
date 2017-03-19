module.exports = filter => calendar => {

  console.log('Rendering...');

  console.log(calendar.name + ', Updated ' + calendar.updated.fromNow());

  console.log('============================');

  calendar.events[filter]().forEach(event => {

    console.log(event.name + Array(50 - event.name.length).join(' ') + event.display.start);

    console.log(`${event.display.durationRange.start} ~ ${event.display.durationRange.end} (${event.duration}h)`);

    console.log('-----------------------------------------------------');
  });
};
