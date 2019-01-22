const fs = require('fs');

fs.createReadStream('./pwa/registerServiceWorker.js').pipe(fs.createWriteStream('./out/registerServiceWorker.js'));
fs.createReadStream('./pwa/sw.js').pipe(fs.createWriteStream('./out/sw.js'));