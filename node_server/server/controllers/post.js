/* define post request handlers here */

module.exports = {
    eventHandler: (req, res) => {
        console.log(req.headers);
        res.send('Well, it worked!');
        console.log(req.body);
    },
};
