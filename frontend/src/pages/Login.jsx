import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoRocket } from "react-icons/go";
import { Link } from "react-router-dom";
import { AxiosInstance } from "../config/axiosIntance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [registeredUsers, setRegisteredUser] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function getRegisteredUsers() {
    try {
      let resp = await AxiosInstance.get("/users");
      // console.log(resp.data);//[{},{},{}]
      setRegisteredUser(resp.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getRegisteredUsers();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);

    let { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required !!");
      return;
    }

    const authUser = registeredUsers.find((user) => {
      return user.email === email && user.password === password;
    });

    const userData = {
      id: authUser.id,
      username: authUser.username,
      email: authUser.email,
    };

    // persist data in localStorage
    localStorage.setItem("authUser", JSON.stringify(userData));
    // store data in userContext

    // navigate to home page
    navigate("/");
  };

  return (
    <main className="h-screen w-full bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleLogin}>
        <div>
          <h1>Welcome Back</h1>
          <p>
            Login to continue <GoRocket />
          </p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>Log in</button>
          <p>
            Dont have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;
