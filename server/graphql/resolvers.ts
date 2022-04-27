const User = require("../models/user");
console.log(User);

export default {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        console.log("users ", users);
        // name of user as weill
        // where is the console?
        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

// open grapql
// hello: (_parent, _args, _context) => {
//     return "Hello";
//   },
