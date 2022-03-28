// https://attacomsian.com/blog/node-make-http-requests
const https = require('https');

const data = JSON.stringify({
  name: 'John Doe',
  job: 'DevOps Specialist',
});

const options = {
  protocol: 'https:',
  hostname: 'reqres.in',
  port: 443,
  path: '/api/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https
  .request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log(JSON.parse(data));
    });
  })
  .on('error', (err) => {
    console.log('Error: ', err.message);
  });

req.write(data);
req.end();
