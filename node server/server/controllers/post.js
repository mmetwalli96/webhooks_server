/* define post request handlers here */

module.exports = {
    eventHandler: (req, res) => {
        res.send('Well, it worked!');
        console.log(req)
    },
};