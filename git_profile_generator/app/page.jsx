'use client'
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);

  const skillOptions = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Node.js",
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Data Structures",
    "Algorithms"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      bio,
      skills
    };
    console.log("Submitted Data: ", formData);
    // Handle form submission, such as sending to an API
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bio">Bio: </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          />
        </div>
        <div>
          <label>Skills: </label>
          <div>
            {skillOptions.map((skill) => (
              <div key={skill}>
                <input
                  type="checkbox"
                  id={skill}
                  value={skill}
                  onChange={handleSkillChange}
                />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2>Preview Data</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Bio:</strong> {bio}</p>
        <p><strong>Skills:</strong> {skills.join(", ")}</p>
      </div>
    </div>
  );
}
