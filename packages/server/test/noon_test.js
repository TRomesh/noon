const assert = require("assert");
const Brand = require('../model/brand');

describe("Testing noon server", () => {

    it("saves a brand", done => {
        const brand = new Brand({
            title:'Apple',
            description:'Apple inc.',
            url:'apple.com',
            datetime:'2017.11.22'
          });
          brand.save((err,newbrand)=>{
            if (err) { throw err; }
            assert(newbrand.title === 'Apple');
            done();
          });    
    });
  
    it("Get all brands", done => {
        Brand.find({},(err,brands)=>{
            if(err){throw err;}
            assert(brands.length > 0);
            done();
        })
    });

    it("Search brands", done => {
        Brand.find({ $or:[ {title:'Apple'}, {description:'Apple inc.'} ]},(err,brands)=>{
            if(err){throw err;}
            assert(brands[0].title === 'Apple');
            assert(brands[0].description === 'Apple inc.');
            done();
        });
    });

    it("Like a brand", done => {
        Brand.findOneAndUpdate({title:'Apple'}, {$inc : { likecount : 1} },{ new: true },(err,brands)=>{
            if(err){throw err;}
            assert(brands.likecount > 1);
            done();
          });
    });
  

  });