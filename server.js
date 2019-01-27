require('dotenv').config();
require('./lib/utils/connect')();

const app = require('./lib/app');
const PORT = 7890;

app.listen(PORT, () => console.log('running'));
