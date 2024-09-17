'use client'
import { useState } from "react";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Template3 from "../components/templates/Template3";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);
  const [template, setTemplate] = useState('templateOne');
  const [markdown, setMarkdown] = useState('');

  const skillOptions = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Data Structures', 'Algorithms'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let markdownContent = '';

    // Render selected template
    if (template === 'templateOne') {
      markdownContent = Template1({ name, email, bio, skills });
    } else if (template === 'templateTwo') {
      markdownContent = Template2({ name, email, bio, skills });
    } else if (template === 'templateThree') {
      markdownContent = Template3({ name, email, bio, skills });
    }

    setMarkdown(markdownContent);
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
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="bio">Bio: </label>
          <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows="4" />
        </div>
        <div>
          <label>Skills: </label>
          <div>
            {skillOptions.map((skill) => (
              <div key={skill}>
                <input type="checkbox" id={skill} value={skill} onChange={handleSkillChange} />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Template Selection */}
        <div>
          <label htmlFor="template">Choose a Template: </label>
          <select id="template" value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="templateOne">Template One</option>
            <option value="templateTwo">Template Two</option>
            <option value="templateThree">Template Three</option>
          </select>
        </div>

        <button type="submit">Generate Markdown</button>
      </form>

      {markdown && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated GitHub README Markdown</h2>
          <pre style={{ background: '#f4f4f4', padding: '10px' }}>
            {markdown}
          </pre>
        </div>
      )}
    </div>
  );
}
