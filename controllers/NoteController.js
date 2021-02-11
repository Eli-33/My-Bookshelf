const db = require("../models");
const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");

module.exports = {
    findAll: function (req, res) {
        var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
       console.log("FINDALL for:", decoded)
       console.log(req.query);
       var qObj = { userId: new Types.ObjectId(decoded._id)}
       if(req.query.state){
         qObj.status=req.query.state
       }
      db.Note
        .find(qObj).populate('users')
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.Note
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      console.log('SAVE METHOD REQ BODY: ', req.body)
      db.Note
        .findOneAndUpdate({ id: req.body.id }, req.body, { upsert: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },
    remove: function(req, res) {
      console.log("REMOVE THIS ID", req.params)
      db.Note
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updatestatus: function(req, res) {
      db.Note
        .findOneAndUpdate({id: req.params.id})
        .then(dbModel => dbModel.status = (req.status))
        .catch(err => res.status(422).json(err));
    },
  };