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
  const [skills, setSkills] = useState([]); // State for selected skills
  const [languages, setLanguages] = useState([]); // State for selected programming languages
  const [template, setTemplate] = useState('templateOne');
  const [markdown, setMarkdown] = useState('');
  const router = useRouter(); // Initialize router

  // Define the language options here in the Home component
  const languageOptions = [
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'C++', icon: '/icons/cpp.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Node.js', icon: '/icons/nodejs.png' },
    { name: 'Docker', icon: '/icons/docker.png' },
    { name: 'Kubernetes', icon: '/icons/kubernetes.png' },
    { name: 'AWS', icon: '/icons/aws.png' },
    { name: 'CI/CD', icon: '/icons/cicd.png' },
    { name: 'Data Structures', icon: '/icons/data-structures.png' },
    { name: 'Algorithms', icon: '/icons/algorithms.png' }
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    let markdownContent = '';

    // Combine selected skills and languages
    const allSkills = [...skills];

    // Render selected template
    if (template === 'templateOne') {
      markdownContent = Template1({ name, email, bio, skills: allSkills });
    } else if (template === 'templateTwo') {
      markdownContent = Template2({ name, email, bio, skills: allSkills });
    } else if (template === 'templateThree') {
      markdownContent = Template3({ name, email, bio, skills: allSkills });
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
      <h1 style={{ marginBottom: '20px', alignSelf: 'center' }}>Enter Your Details</h1>

      <form onSubmit={handleSubmit} style={{ width: '100%', alignItems: 'center'}}>
        {/* {display: 'flex' to put items next to each other} */}
        {/* Name Field */}
        <div style={{ marginBottom: '15px', width: '20%'}}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={'Suhel Alam'}
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
            value={'suhelalam415@gmail.com'}
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
            value={"I am a software engineer"}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            style={{ width: '100%', padding: '8px' }} // Make textarea full width
          />
        </div>

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
        {/* Submit Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button type="submit" style={{ padding: '10px 15px', width: '200px' }}>
            Generate Markdown
          </button>
        </div>

        
      </form>

      {/* Display selected language icons */}
      {languages.length > 0 && (
        <div>
          <h3>Selected Languages with Stickers</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {languages.map((language) => {
              const langOption = languageOptions.find(lang => lang.name === language); // Fix the error by using languageOptions array here
              return (
                <div key={language} style={{ textAlign: 'center' }}>
                  <img src={langOption?.icon} alt={language} style={{ width: '50px', height: '50px' }} />
                  <p>{language}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
