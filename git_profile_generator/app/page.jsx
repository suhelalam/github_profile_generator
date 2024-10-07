'use client';
import { useState } from "react";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Template3 from "../components/templates/Template3";
import { useRouter } from 'next/navigation'
import Skills from "../components/Skills/Skills"; // Import the Skills component


export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);
  const [template, setTemplate] = useState('templateOne');
  const [markdown, setMarkdown] = useState('');
  const router = useRouter(); // Initialize router

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
    // Navigate to the generated page with the markdown content as a query parameter
    router.push(`/generated?markdown=${encodeURIComponent(markdownContent)}`);
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
    <div style={{
      maxWidth: '100%',
      margin: '20px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center elements horizontally
      padding: '10px', // Optional: add padding around the form
      boxSizing: 'border-box' // Include padding in width calculations
    }}>
      <h1 style={{ marginBottom: '20px', alignSelf: 'flex-start' }}>Enter Your Details</h1>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        {/* {display: 'flex' to put items next to each other} */}
        {/* Name Field */}
        <div style={{ marginBottom: '15px', width: '20%'}}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }} // Make input full width
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '15px', width: '20%' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }} // Make input full width
          />
        </div>

        {/* Bio Field */}
        <div style={{ marginBottom: '15px', width: '100%' }}>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            style={{ width: '100%', padding: '8px' }} // Make textarea full width
          />
        </div>

      {/* Skills Section */}
      {/* Skills Component */}
      <Skills selectedSkills={skills} onSkillChange={handleSkillChange} />

        {/* Template Selection */}
        <div style={{ marginBottom: '15px', width: '10%' }}>
          <label htmlFor="template">Choose a Template:</label>
          <select
            id="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            style={{ width: '100%', padding: '8px' }} // Make select full width
          >
            <option value="templateOne">Template One</option>
            <option value="templateTwo">Template Two</option>
            <option value="templateThree">Template Three</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px 15px', width: '10%', alignItems: 'center' }}>
          Generate Markdown
        </button>
      </form>

      {markdown && (
        <div style={{ marginTop: '20px', width: '100%' }}>
          <h2>Generated GitHub README</h2>
          <pre style={{ background: '#f4f4f4', padding: '10px' }}>
            {markdown}
          </pre>
        </div>
      )}
    </div>
  );
}
