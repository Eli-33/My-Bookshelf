const db = require("../models");

module.exports = {

  findOneUser: function (req,res) {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    db.User
    .findOne({_id:decoded._id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res) {
       console.log("FINDALL")
      db.GoogleBooks
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.GoogleBooks
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      db.GoogleBooks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
       
    }, 
    remove: function(req, res) {
      console.log("REMOVE THIS ID", req.params)
      db.GoogleBooks
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updatestatus: function(req, res) {
      db.GoogleBooks
        .findOne({id: req.params.id})
        .then(dbModel => dbModel.status = (req.status))
        .catch(err => res.status(422).json(err));
    },
  };

  
  // update: function(req, res) {
  //   db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },