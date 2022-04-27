const { User } = require("../models");

export default {
  Query: {
    getUsers: async () => {
      try {
        const users = await User();

        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

// hello: (_parent, _args, _context) => {
//     return "Hello";
//   },
