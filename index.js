const conn = require('./db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

conn.open().then(() => {
    app.listen(PORT);
});
