const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

try {
  fetch(
    'https://api.gitmosaic.com/commit', 
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify(github.context.payload)
    });
} catch (error) {
  core.setFailed(error.message);
}
