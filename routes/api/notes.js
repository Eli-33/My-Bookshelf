const router = require("express").Router();
const Note = require("../../models/notes");

  router.post("/Blog", (req, res) => {
    console.log(req.body);
  
    Note.insert(req.body, (error, saved) => {
      if (error) {
        console.log(error);
      } else {
        res.send(saved);
      }
    });
  });
  
  router.get("/Blog/all", (req, res) => {
    Note.find({}, (error, found) => {
      if (error) {
        console.log(error);
      } else {
        res.json(found);
      }
    });
  });
  
  router.get("/Blog/find/:id", (req, res) => {
    Note.findOne(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      (error, found) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(found);
          res.send(found);
        }
      }
    );
  });
  
  router.post("/Blog/update/:id", (req, res) => {
    Note.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $set: {
          title: req.body.title,
          note: req.body.note,
          modified: Date.now()
        }
      },
      (error, edited) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });
  
  router.delete("/Blog/delete/:id", (req, res) => {
    Note.remove(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
      (error, removed) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(removed);
          res.send(removed);
        }
      }
    );
  });
  
//   router.delete("/Blog/clearall", (req, res) => {
//     Note.remove({}, (error, response) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(response);
//         res.send(response);
//       }
//     });
//   });



module.exports = router;