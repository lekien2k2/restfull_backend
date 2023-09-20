const connection = require('../config/database.js');

const getHomePage = (req, res) => {
    let users = [];

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>> results HomePage =", results); // results contains rows returned by server
            res.send(JSON.stringify(users));
        }

    );
}

const getUsersPage = (req, res) => {
    res.render('users.ejs');
}

module.exports = {
    getHomePage,
    getUsersPage
};