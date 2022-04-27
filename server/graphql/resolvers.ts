import User from "../models/user";

export default {
  Query: {
    getUsers: async () => {
      try {
        // let users = await db.User.findAll({});
        const users = await User.findAll({
          attributes: ["first_name", "last_name", "email"],
          limit: 100,
        });
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
