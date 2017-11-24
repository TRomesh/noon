const Brand = require('../model/brand');


module.exports = function(app) {

  app.get("/getallbrand", function(req, res) {
    Brand.find({},(err,brands)=>{
        if(err){return next(err);}
        res.json(brands);
    });
  });

  app.get("/getalllikedbrand", function(req, res) {
    Brand.find({like:true},(err,brands)=>{
        if(err){return next(err);}
        res.json(brands);
    })
  });

  app.get("/serachbrand", function(req, res) {
    Brand.find({ $or:[ {title:req.query.search}, {description:req.query.search} ]},(err,brands)=>{
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
    Brand.findOneAndUpdate({_id :req.body.id}, {like:true},{ new: true },(err,brands)=>{
      if(err){return next(err);}
      console.log(brands);
      res.json(brands);
    });
  });

  app.get("/deletelikedbrand", function(req, res) {
    res.send({ hi: "there" });
  });
};
