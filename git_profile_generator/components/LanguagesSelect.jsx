
// const languagesList = [
//   'Assembly Language', 'Ada', 'ALGOL', 'APL', 'Awk', 'Bash', 'Basic', 'C', 'C++', 'C#',
//   'COBOL', 'Crystal', 'D', 'Dart', 'Delphi (Object Pascal)', 'Elixir', 'Erlang', 'F#',
//   'Fortran', 'Go (Golang)', 'Groovy', 'Haskell', 'Java', 'JavaScript (JS)', 'Julia',
//   'Kotlin', 'Lisp', 'Lua', 'MATLAB', 'Nim', 'Objective-C', 'OCaml', 'Pascal', 'Perl',
//   'PHP', 'Prolog', 'Python', 'R', 'Ruby', 'Rust', 'Scala', 'Shell Script (sh)', 'Smalltalk',
//   'Swift', 'TypeScript', 'Vala', 'VHDL', 'Visual Basic', 'Zig',
//   'ActionScript', 'AppleScript', 'CSS', 'HTML', 'Jinja', 'JSON', 'Lua', 'Markdown', 'PHP',
//   'PowerShell', 'Tcl', 'TeX', 'XML', 'YAML', 'Clojure', 'Elm', 'F#', 'Haskell', 'Lisp', 
//   'ML', 'OCaml', 'Scheme', 'CSS (Cascading Style Sheets)', 'GraphQL', 'HTML (Hypertext Markup Language)',
//   'LaTeX', 'Mathematica', 'PostScript', 'Regex (Regular Expressions)', 'SQL (Structured Query Language)',
//   'VHDL (Hardware Description Language)', 'Assembly Language', 'Machine Code', 'VHDL', 'Verilog',
//   'Cypher (Graph Databases)', 'GraphQL', 'JSONiq', 'MySQL', 'PL/SQL', 'SPARQL', 'SQL', 'XQuery',
//   'Prolog', 'Datalog', 'Brainfuck', 'Chef', 'Forth', 'Malbolge', 'Whitespace'
// ];
'use client'
import React, { useState } from 'react';
import JavaScriptIcon from '@mui/icons-material/Code'; // Example icon for JS

const languageOptions = [
  { name: 'JavaScript', icon: 'icons/javascript.png' },
  { name: 'Python', icon: 'icons/python.png' },
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'C++', icon: '/icons/cpp.png' },
  { name: 'React', icon: '/icons/react.png' },
//   { name: 'Node.js', icon: '/icons/nodejs.png' },
//   { name: 'Docker', icon: '/icons/docker.png' },
//   { name: 'Kubernetes', icon: '/icons/kubernetes.png' },
//   { name: 'AWS', icon: '/icons/aws.png' },
//   { name: 'CI/CD', icon: '/icons/cicd.png' },
//   { name: 'Data Structures', icon: '/icons/data-structures.png' },
//   { name: 'Algorithms', icon: '/icons/algorithms.png' }
];

const LanguagesSelect = ({ onSelectionChange }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    let updatedLanguages;

    if (checked) {
      updatedLanguages = [...selectedLanguages, value];
    } else {
      updatedLanguages = selectedLanguages.filter((lang) => lang !== value);
    }

    setSelectedLanguages(updatedLanguages);
    onSelectionChange(updatedLanguages);
  };

  return (
    <div>
      <label>Select Programming Languages:</label>
      <div>
        {languageOptions.map((language) => (
          <div key={language.name} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id={language.name}
              value={language.name}
              onChange={handleLanguageChange}
            />
            <label htmlFor={language.name}>{language.name}</label>
            <img
              src={language.icon}
              alt={`${language.name} icon`}
              style={{ width: '30px', height: '30px', marginLeft: '10px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSelect;


