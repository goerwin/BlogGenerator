const path = require('path');
const serverHelpers = require('./serverHelpers');

serverHelpers.getServer(path.join(__dirname, 'blogSamples', 'blogWithFiles'), {
    port: 8080,
    env: 'development',
});
