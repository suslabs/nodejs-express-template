const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = "3000";
const IP = "localhost";

const routeFiles = fs.readdirSync(path.join(__dirname, 'routes'));
routeFiles.forEach((file) => {
  const routePath = path.join(__dirname, 'routes', file);
  const route = require(routePath);
  
  app.use('/api/' + path.basename(file, '.js'), route);
  console.log(`[${routePath}] => ${IP}:${PORT}/api/${path.basename(file, '.js')}`)
});

app.listen(PORT, IP, () => {
  console.log(`[EXPRESS-APP] Started! (${IP}:${PORT})`);
});
