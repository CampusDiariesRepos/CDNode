// This object is required in config/databases.js

const mySqlConnection = {
    host: 'yourhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdbname',
    testdatabase: 'yourtestdbname'
};

module.exports = {
    mySqlConnection,
}