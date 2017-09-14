let mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.set('test', process.env.NODE_ENV === 'test');

function open() {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'test') {
            let Mockgoose = require('mockgoose').Mockgoose;
            let mockgoose = new Mockgoose(mongoose);
            mockgoose.helper.setDbVersion('3.4.7');
            mockgoose.prepareStorage().then(() => {
                mongoose.connect(keys.mongoURI, (err, res) => {
                    if (err) return reject(err);
                    resolve();
                });
            }).catch(reject);
        } else {
            mongoose.connect(keys.mongoURI, (err, res) => {
                if (err) return reject(err);
                resolve();
            });
        }
    });
}

function close() {
    return mongoose.disconnect();
}

module.exports = { close, open };
