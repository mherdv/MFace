const app = require('./server/app');
const keys = require('./config/keys');


app.listen(keys.PORT, () => {
    console.log('server is running in port ' + keys.PORT);
})