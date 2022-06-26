const user = require("./index").db("Flurty").collection("users");

const ObjectId = require("mongodb").ObjectId;

const SaveUser = async ({ fullName, age, email, gender, phone }) => {
  const result = await user.insertOne({ fullName, age, email, gender, phone });
  return result;
};

module.exports = { SaveUser };