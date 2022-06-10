/* define post request handlers here */

// import dependencies
const { Webhooks } = require('@octokit/webhooks');
require('dotenv').config();

module.exports = {
    eventHandler: async (req, res) => {
        const webhook = new Webhooks({
            secret: process.env.WEBHOOK_SECRET,
        });

	const payload = req.body;
	
	const signature = await webhook.sign(payload);
	
	const status = await webhook.verify(payload, signature)
	if (status) {
		const name = req.headers["x-github-event"];
		
		switch(name){
		case "push":
			// create git pull request
			console.log("commit was created")
			break;
		case "pull_request":
			const pullRequestStatus = payload.action;
			if (pullRequestStatus === "closed"){
			// create git pull request
			console.log("pull requested approved")
			};
			break;
		};
		
        	res.send("Well, it worked!");
        }
	else {
		res.send(401)
	}
    },
};
