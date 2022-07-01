import React, { useState } from "react";

export default function FormFunc() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [details, setDetails] = useState("");
  const [fruits, setFruites] = useState("");
  const [error, setError] = useState("");
  const [Perror, setPerror] = useState("");
  const validator = () => {
    if (!email > 0 && !pass > 0) {
      setError("Email and password required");
    } else if (!email > 0) {
      setError("email is required");
    } else if (!pass > 0) {
      setPerror("password is required");
    } else {
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      alert("form submited");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <h6 style={{ color: "red" }}> {error}</h6>
        </div>
        <div>
          <input type="password" onChange={(e) => setPass(e.target.value)} />
          <h6 style={{ color: "red" }}> {Perror}</h6>
          <select onChange={(e) => setFruites(e.target.value)}>
            <option value="" selected disabled>
              Select
            </option>
            <option value="mango">Mango</option>
            <option value="lichu">Lichu</option>
            <option value="jackfruit">Jackfruit</option>
          </select>{" "}
          <h2>{fruits}</h2>
          <br />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <h4>{details}</h4>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
