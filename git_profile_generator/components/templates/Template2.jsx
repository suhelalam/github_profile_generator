export default function Template2({ name, email, bio, skills }) {
    const selectedSkills = skills.map(skill => `* ${skill}`).join("\n");
  
    return `
  # ${name}'s Developer Profile 💻
  
  ### Contact Info
  - Email: [${email}](mailto:${email})
  
  ### Professional Summary
  ${bio}
  
  ### Technical Skills:
  ${selectedSkills}
  
  ---
  
  Thanks for visiting my profile! Let’s collaborate!
  
  ## GitHub Stats
  ![${name}'s GitHub Stats](https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=dark)
  `;
  }
  