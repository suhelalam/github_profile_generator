export default function Template3({ name, email, bio, skills }) {
    const selectedSkills = skills.map(skill => `> - ${skill}`).join("\n");
  
    return `
  # 🚀 ${name} - Full Stack Engineer
  
  ## About Me:
  ${bio}
  
  ## Reach Me:
  📧 [${email}](mailto:${email})
  
  ## Skillset:
  ${selectedSkills}
  
  ---
  
  Looking forward to connecting! 🚀
  
  ## GitHub Stats
  ![${name}'s GitHub Stats](https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=tokyonight)
  `;
  }
  