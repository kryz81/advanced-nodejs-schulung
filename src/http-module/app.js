const { createServer } = require('http');

const jobs = [{ id: '1', name: 'Job 1' }, { id: '2', name: 'Job 2' }];

const router = (req, res) => {
  const { pathname, searchParams } = new URL(req.url, 'http://localhost');
  const path = pathname.substr(1);

  let content = {};
  let status = 200;
  const headers = { 'Content-Type': 'application/json' };

  switch (path) {
    case 'jobs':
      content = [...jobs];
      break;
    case 'job':
      // eslint-disable-next-line
      const foundJob = jobs.find(job => job.id === searchParams.get('id'));
      if (foundJob) {
        content = foundJob;
      } else {
        status = 404;
      }
      break;
    default:
      status = 404;
  }

  res.writeHead(status, headers);
  res.end(JSON.stringify(content));
};

const app = () => createServer(router);

module.exports = app;
