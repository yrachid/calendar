require('value-box/path')(__dirname, ['/values']);
const moment = require('moment');

const { longStub, shortStub } = require('value-box');

const calendar = require('./domain/calendar');
const showComfortable = require('./show-modes/comfortable');

showComfortable('all')(calendar(shortStub));
