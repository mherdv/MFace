const mongoose = require('mongoose');
const connectedServer = mongoose.connect(`mongodb://localhost/MFace`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then((res) => {
        console.log('successful connection to db')
    }).catch((err) => {
        console.log('db connection error ')
    })

module.exports = connectedServer;