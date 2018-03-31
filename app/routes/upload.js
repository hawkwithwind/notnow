const express = require('express');
const path = require('path');
const mkdirp = require('mkdirp');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  let uploaded = req.files.upload;
  let filename = uploaded.name;

  mkdirp('/var/lib/notnow/uploaded');
   
  // Use the mv() method to place the file somewhere on your server
  uploaded.mv(path.join('/var/lib/notnow/uploaded', filename), function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded');
  });
});

module.exports = router;
