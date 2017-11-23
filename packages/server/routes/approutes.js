const Brand = require('../model/brand');


module.exports = function(app) {

  app.get("/getallbrand", function(req, res) {
    Brand.find({},(err,brands)=>{
        if(err){return next(err);}
        res.json(brands);
    })
  });

  app.get("/serachbrand", function(req, res) {
    Brand.find({ $or:[ {title:req.query.title}, {description:req.query.description} ]},(err,brands)=>{
        if(err){return next(err);}
        res.json(brands);
    });
  });

  app.post("/addbrand", function(req, res) {
      const brand = new Brand({
        title:req.body.title,
        description:req.body.description,
        url:req.body.url,
        datetime:req.body.datetime
      });
      brand.save((err,newbrand)=>{
        if (err) { return next(err); }
        res.json(newbrand);
      });
  });

  app.post("/likebrand", function(req, res) {
    Brand.update({_id :req.body._id}, {$inc : { likecount : 1} },(err,brands)=>{
      if(err){return next(err);}
      res.json(brands);
    });
  });

  app.get("/deletelikedbrand", function(req, res) {
    res.send({ hi: "there" });
  });
};
