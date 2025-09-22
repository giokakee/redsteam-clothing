import { useState } from "react";
import authApi from "../api/authApi";

const userToRegister = {
  email: "zimbabue@example.com",
  username: "zimbabue",
  password: "testpassword",
  password_confirmation: "testpassword",
};

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

      <input
        onFocus={(e) => console.log(e)}
        onBlur={() => console.log("mouse movedd")}
      />
      <select>
        <option
          value="1"
          onClick={(e) => console.log("option clicked")}
          onMouseEnter={(e) => console.log("mouse enter")}
          onMouseLeave={(e) => console.log("mouse leave")}
        >
          Option 1
        </option>

        <option value="2">Option 2</option>
      </select>

      <button onClick={loginUser}> login user</button>

      <select
        onChange={(e) => {
          console.log("Selected value:", e.target.value);
          console.log(
            "Selected text:",
            e.target.options[e.target.selectedIndex].text
          );
        }}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
    </div>
  );
};

export default TestPage;
