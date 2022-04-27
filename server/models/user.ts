// import { gql } from "apollo-server-micro";
// ("use strict");
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
// yes n

// yes push it to git
//   User.init(
//     {
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//     },
//     {
//       sequelize,
//       modelName: "User",
//       tableName: "users",
//     }
//   );

//   console.log("User ", User);
//   console.log("TEST________________ ");
//   return User;
// };

// console.log("TEST________________INDEX MODEL ");

// hello define model like this https://sequelize.org/docs/v6/core-concepts/model-basics/
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
// now check it

// open graphql
// this way we have to deine
const User = sequelize.define(
  "User",
  // create user from vs code like this
  // https://sequelize.org/docs/v6/core-concepts/model-instances/
  // with the help of create method in the docu
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = User;
