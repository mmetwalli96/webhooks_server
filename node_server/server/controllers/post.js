/* define post request handlers here */

// import dependencies
const { Webhooks } = require('@octokit/webhooks');
require('dotenv').config();

module.exports = {
    eventHandler: (req, res) => {
        const webhook = new Webhooks({
            secret: process.env.WEBHOOK_SECRET,
        });
        console.log(webhook)
        console.log(req.headers);
        res.send('Well, it worked!');
        console.log(req.body);
    },
};
