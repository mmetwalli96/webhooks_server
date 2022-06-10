/* define post request handlers here */

// import dependencies
const { Webhooks } = require("@octokit/webhooks");
require("dotenv").config();
const exec = require("child_process").exec;

module.exports = {
  eventHandler: async (req, res) => {
    const webhook = new Webhooks({
      secret: process.env.WEBHOOK_SECRET,
    });

    const path = process.env.DIRECTORY_PATH;
   

    try {
      const signature = await webhook.sign(payload);
      const status = await webhook.verify(payload, signature);

      if (status) {
        const payload = req.body;
        const name = req.headers["x-github-event"];

        switch (name) {
          case "push":
            // create git pull request
            const command = `cd ${path} && git pull origin main`;

            exec(command, (err, stdout, stderr) => {
              if (err) {
                console.log(err);
                return res.status(500).send(stderr);
              }
              return res.status(200).send(stdout);
            });
            break;
          case "pull_request":
            const pullRequestStatus = payload.action;
            if (pullRequestStatus === "closed") {
              // create git pull request
              const command = `cd ${path} && git pull origin main`;

              exec(command, (err, stdout, stderr) => {
                if (err) {
                  console.log(err);
                  return res.status(500).send(stderr);
                }
                return res.status(200).send(stdout);
              });
            }
            break;
        };
      } else {
        res.send(401);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
