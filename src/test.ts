import { createUser } from "./actions/user";

const user = {
  name: "Swetanshu",
  email: "swetanshusingh17@gmail.com",
  password: "swetanshu1singh7",
};

createUser(user)
  .then((data) => {
    console.log("User created", data);
  })
  .catch((err) => {
    console.log("An error occured", err);
  });
