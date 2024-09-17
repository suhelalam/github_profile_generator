export default function Template1({ name, email, bio, skills }) {
    const selectedSkills = skills.map(skill => `- ${skill}`).join("\n");
  
    return `
  # Hi, I'm ${name} 👋
  
  ## About Me
  - 💼 Currently working on: **${bio}**
  - 📧 Contact me: [${email}](mailto:${email})
  
  ## Skills
  ${selectedSkills}
  
  ---
  
  Feel free to reach out if you'd like to collaborate or chat about software engineering, technology, or any interesting projects!
  
  ## GitHub Stats
  ![${name}'s GitHub Stats](https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=radical)
  `;
  }
  