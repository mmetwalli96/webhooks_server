/* define post request handlers here */

// import dependencies
const { Webhooks } = require("@octokit/webhooks");
require("dotenv").config();

module.exports = {
  eventHandler: async (req, res) => {
    const webhook = new Webhooks({
      secret: process.env.WEBHOOK_SECRET,
    });

    try {
      const signature = await webhook.sign(payload);
      const status = await webhook.verify(payload, signature);

      if (status) {
          
        const payload = req.body;
        const name = req.headers["x-github-event"];

        switch (name) {
          case "push":
            // create git pull request
            console.log("commit was created");
            break;
          case "pull_request":
            const pullRequestStatus = payload.action;
            if (pullRequestStatus === "closed") {
              // create git pull request
              console.log("pull requested approved");
            }
            break;
        }
        res.status(200).send("Deployed");
      } else {
        res.send(401);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
