'use client';
import { useState } from 'react';
import LanguagesSelect from '../components/LanguagesSelect'; // Language selection component
import Template1 from '../components/templates/Template1';
import Template2 from '../components/templates/Template2';
import Template3 from '../components/templates/Template3';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [languages, setLanguages] = useState([]); // State for selected programming languages
  const [template, setTemplate] = useState('templateOne');
  const [markdown, setMarkdown] = useState('');

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
    const allSkills = [...skills, ...languages];

    // Render selected template
    if (template === 'templateOne') {
      markdownContent = Template1({ name, email, bio, skills: allSkills });
    } else if (template === 'templateTwo') {
      markdownContent = Template2({ name, email, bio, skills: allSkills });
    } else if (template === 'templateThree') {
      markdownContent = Template3({ name, email, bio, skills: allSkills });
    }

    setMarkdown(markdownContent);
  };


  const handleLanguagesChange = (selectedLanguages) => {
    setLanguages(selectedLanguages);
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


        {/* Language Selection */}
        <LanguagesSelect onSelectionChange={handleLanguagesChange} />

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

      {/* Display generated markdown */}
      {markdown && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated GitHub README Markdown</h2>
          <pre style={{ background: '#f4f4f4', padding: '10px' }}>
            {markdown}
          </pre>
        </div>
      )}

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
