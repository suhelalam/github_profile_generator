export default function Template1({ name, email, bio, skills }) {
  // Generate list items for the selected skills
  const selectedSkills = skills.length > 0 
    ? skills.map(skill => `<li>${skill}</li>`).join("") 
    : "<li>No skills selected</li>"; // Provide a fallback if no skills are selected

  return `
    <h1>Hi, I'm ${name} 👋</h1>

    <h2>About Me</h2>
    <ul>
      <li>💼 Currently working on: <strong>${bio}</strong></li>
      <li>📧 Contact me: <a href="mailto:${email}">${email}</a></li>
    </ul>

    <h2>Skills</h2>
    <ul>
      ${selectedSkills}
    </ul>

    <hr />

    <p>
      Feel free to reach out if you'd like to collaborate or chat about software engineering, technology, or any interesting projects!
    </p>

    <h2>GitHub Stats</h2>
    <img src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=radical" alt="${name}'s GitHub Stats" />
  `;
}
