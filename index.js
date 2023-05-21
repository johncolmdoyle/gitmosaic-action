import fetch from 'node-fetch';

const core = require('@actions/core');
const github = require('@actions/github');

try {
  fetch('https://api.gitmosaic.com/post', {method: 'POST', body: github.context.payload});
} catch (error) {
  core.setFailed(error.message);
}
