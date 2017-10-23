module.exports = function(app) {
  app.get("/getallpost", function(req, res) {
    res.send({ hi: "there" });
  });

  app.post("/addpost", function(req, res) {
    res.send({ hi: "there" });
  });

  app.post("/likepost", function(req, res) {
    res.send({ hi: "there" });
  });

  app.get("/deletelikedpost", function(req, res) {
    res.send({ hi: "there" });
  });
};
