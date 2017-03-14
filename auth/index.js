const fs = require('fs');
const GoogleAuth = require('google-auth-library');
const localToken = require('./local-token');
const remoteToken = require('./remote-token');

const resolveToken = (credentials, callback) => {
  const { client_secret, client_id, redirect_uris } = credentials.installed;

  const client = new (new GoogleAuth()).OAuth2(client_id, client_secret, redirect_uris[0]);

  return localToken.exists()
  ? localToken.get(client, callback)
  : remoteToken.get(client, callback);

};

const getAuthorizedClient = callback => {

  fs.readFile('client_secret.json', (err, content) => {
    if (!err) {
      return resolveToken(JSON.parse(content), callback);
    }

    console.log('Error loading client secret file: ' + err);
  });

};

module.exports = getAuthorizedClient;
