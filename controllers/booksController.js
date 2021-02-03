const db = require("../models");
const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");

module.exports = {
    findAll: function (req, res) {
        var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
       console.log("FINDALL for:", decoded)
      db.GoogleBooks
        .find({
            userId: new Types.ObjectId(decoded._id)
        }).populate('users')
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
      console.log('SAVE METHOD REQ BODY: ', req.body)
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
        .findOneAndUpdate({id: req.params.id})
        .then(dbModel => dbModel.status = (req.status))
        .catch(err => res.status(422).json(err));
    },
  };

  
  // update: function(req, res) {
  //   db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },