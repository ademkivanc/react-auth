let config = require('./config');
let jwt = require('jsonwebtoken');

const login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let fakeUsername = 'admin';
    let fakePassword = 'password';

    if (username && password) {
        if (username === fakeUsername && password === fakePassword) {
            let token = jwt.sign({ username: username },
                config.secret,
                {
                    expiresIn: '8h' // expires in 8 hours
                }
            );
            res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        } else {
            res.status(403).send({
                success: false,
                message: 'Incorrect username or password'
            });
            
        }
    } else {
        res.status(400).send({
            success: false,
            message: 'Authentication failed! Please check'
        });
    }
}

module.exports = login;
