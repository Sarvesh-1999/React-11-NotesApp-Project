import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let resp = await axios.post("http://localhost:3000/users", formData);
      console.log(resp);
      toast.success("Signup Successfully");
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed");
    }
  };

  return (
    <main className="h-screen w-full bg-gray-50 flex items-center justify-center">
      <form onSubmit={handleSignup}>
        <div>
          <h1>Create Account</h1>
          <p>
            Signup to get started <GoRocket />
          </p>
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
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
          <button>Sign up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Signup;
