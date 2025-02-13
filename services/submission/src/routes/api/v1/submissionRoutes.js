const {
  createSubmission,
} = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
  fastify.post("/", createSubmission);
  fastify.get("/ping", async (req, res) => {
    res.send("pong");
  });
}

module.exports = submissionRoutes;
