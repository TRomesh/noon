module.exports = function(app) {
  app.get("/noon", function(req, res) {
    res.send({ hi: "there" });
  });
};
