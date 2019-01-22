const fs = require('fs');

fs.createReadStream('./pwa/registerServiceWorker.js').pipe(fs.createWriteStream('./.next/registerServiceWorker.js'));
fs.createReadStream('./pwa/sw.js').pipe(fs.createWriteStream('./.next/sw.js'));