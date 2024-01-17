const User = require('../db/models/user');
const Page = require('../db/models/page');
const Tag = require('../db/models/tag');
const Leetcode = require("../db/models/leetcode")

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Page,
    Tag,
    Leetcode,
  };
  next();
};

module.exports = addModelsToRequest;
