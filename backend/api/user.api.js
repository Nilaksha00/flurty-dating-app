const { SaveUser } = require("../dal/user.dao");

const addUser = async ({ fullName, age, email, gender, phone }) => {
  const user = {
    fullName,
    age,
    email,
    gender,
    phone,
  };

  return await SaveUser(user);
};

module.exports = { addUser };
