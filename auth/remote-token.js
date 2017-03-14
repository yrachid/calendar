const readline = require('readline');
const { storeToken } = require('./local-token');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const get = (client, callback) => {

  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  console.log('Authorize this app by visiting this url: ', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the code from that page here: ', function(code) {

    rl.close();

    client.getToken(code, function(err, token) {

      if (!err) {
        client.credentials = token;
        storeToken(token);
        return callback(client);
      }

      console.log('Error while trying to retrieve access token', err);

    });

  });
};

module.exports = { get };
