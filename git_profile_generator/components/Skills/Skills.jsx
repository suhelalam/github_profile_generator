import React from 'react';
import {
    generalPurposeLanguages,
    webDevelopmentLanguages,
    scriptingLanguages,
    databaseLanguages,
    functionalLanguages,
    lowLevelLanguages,
    otherLanguages,
    domainSpecificLanguages,
    markupLanguages,
    webDevelopmentSkills,
    dataScienceSkills,
    mobileDevelopmentSkills,
    cloudComputingSkills,
    cybersecuritySkills,
    gameDevelopmentSkills,
    projectManagementSkills,
    softwareTestingSkills
} from '.'; // Adjust the import based on your file structure

const Skills = ({ selectedSkills, onSkillChange }) => {
  const skillCategories = [
    { title: 'Programming Languages', skills: generalPurposeLanguages },
    { title: 'Web Development Skills', skills: webDevelopmentLanguages },
    { title: 'Database Languages', skills: databaseLanguages },
    { title: 'Scripting Languages', skills: scriptingLanguages},
    { title: 'functionalLanguages', skills: functionalLanguages},
    { title: 'Low Level Languages', skills: lowLevelLanguages},
    { title: 'Other Languages', skills: otherLanguages},
    { title: 'Domain Specific Languages', skills: domainSpecificLanguages},
    { title: 'Markup Languages', skills: markupLanguages},
    { title: 'Web Development Skills', skills: webDevelopmentSkills},    
    { title: 'Data Science Skills', skills: dataScienceSkills },
    { title: 'Mobile Development Skills', skills: mobileDevelopmentSkills },
    { title: 'Cloud Computing Skills', skills: cloudComputingSkills },
    { title: 'Cybersecurity Skills', skills: cybersecuritySkills },
    { title: 'Game Development Skills', skills: gameDevelopmentSkills },
    { title: 'Project Management Skills', skills: projectManagementSkills },
    { title: 'Software Testing Skills', skills: softwareTestingSkills },
  ];

  return (
    <div style={{ marginBottom: '15px', width: '100%' }}>
      <label>Skills:</label>
      {skillCategories.map(({ title, skills }) => (
        <div key={title}>
          <h4>{title}:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '5px' }}>
            {skills.map((skill) => (
              <div key={skill} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  id={skill}
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={onSkillChange}
                />
                <label htmlFor={skill} style={{ marginLeft: '5px' }}>{skill}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
