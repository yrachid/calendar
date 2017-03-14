const fs = require('fs');

const { HOME, HOMEPATH, USERPROFILE } = process.env;

const TOKEN_DIR = `${(HOME || HOMEPATH || USERPROFILE)}/.credentials`;

const TOKEN_PATH = `${TOKEN_DIR}/calendar-nodejs-quickstart.json`;

const createTokenDir = () => {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
};

const storeToken = token => {
  createTokenDir();
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
};

const exists = () => fs.existsSync(TOKEN_PATH);

const get = (client, cb) => {
  client.credentials = JSON.parse(fs.readFileSync(TOKEN_PATH));
  return cb(client);
};

module.exports = { storeToken, exists, get };
