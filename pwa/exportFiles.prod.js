const fs = require('fs');

fs.createReadStream('./registerServiceWorker.js').pipe(fs.createWriteStream('../out/registerServiceWorker.js'));
fs.createReadStream('./sw.js').pipe(fs.createWriteStream('../out/sw.js'));