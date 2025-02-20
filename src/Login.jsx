import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-fit flex items-center mx-auto my-24 card card-border bg-base-100 w-96">
      <div className="card-body flex justfy-between">
        <h2 className="card-title text-3xl ">SignIn</h2>

        <label className="form-control w-full max-w-xs mt-8">
          <div className="label">
            <span className="text-lg">Email</span>
          </div>
          <input
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="enter email"
            className="input input-bordered w-[100%] max-w-xs mt-2"
          />
        </label>
        <label className="form-control w-full max-w-xs mt-5">
          <div className="label">
            <span className="text-lg">Password</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
            className="input input-bordered w-[100%] max-w-xs mt-2"
          />
        </label>

        <div className="card-actions flex justify-center my-10">
          <button className="btn btn-primary bg-blue-600">SignIn</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
