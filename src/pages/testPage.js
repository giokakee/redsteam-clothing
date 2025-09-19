import { useState } from "react";
import authApi from "../api/authApi";

const userToRegister = {
  email: "zimbabue@example.com",
  username: "zimbabue",
  password: "testpassword",
  password_confirmation: "testpassword",
};

// const obj = {
//   user: {
//     username: "zimbabue",
//     email: "zimbabue@example.com",
//     avatar:
//       "https://api.redseam.redberryinternship.ge/storage/avatars/vlpSZ3A9rAmacRZiPkp7Q4jli1GiDoWquETEMnJ2.jpg",
//     id: 232,
//   },
//   token: "1501|Io9kTV1FgyFbSXny5BGofztbQ5Tj63J653oJNqgsce517c66",
// };

// const loginedUser = {
//   user: {
//     id: 232,
//     username: "zimbabue",
//     email: "zimbabue@example.com",
//     is_admin: 0,
//     remember_token: null,
//     avatar:
//       "https://api.redseam.redberryinternship.ge/storage/avatars/vlpSZ3A9rAmacRZiPkp7Q4jli1GiDoWquETEMnJ2.jpg",
//   },
//   token: "1502|EOOmG4KmBTVMbdZmEjmlZrC9fPU7PYH4vuL0eGBp14f17637",
// };

const TestPage = () => {
  const [file, setFile] = useState(null);

  const registerUSer = async () => {
    try {
      if (!file) {
        return;
      }
      const formData = new FormData();
      formData.append("username", userToRegister.username);
      formData.append("email", userToRegister.email);
      formData.append("password", userToRegister.password);
      formData.append(
        "password_confirmation",
        userToRegister.password_confirmation
      );
      formData.append("avatar", file);
      const res = await authApi.register(formData);
      console.log(res);

      console.log(userToRegister, " this is form data");
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async () => {
    try {
      const res = await authApi.login({
        email: "             zimbabue@example.com",
        password: "testpassword",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={registerUSer}>Register User</button>

      <button onClick={loginUser}> login user</button>
    </div>
  );
};

export default TestPage;
