const projects = [
  {
    title: "La Vendetta di Mora",
    description: "A short Hack&Slash game.",
    tech: ["Unity", "C#"],
    link: "https://github.com/tuo-username/unity-adventure-game",
    //video: "/videos/mora-preview.mp4", // aggiunto
  },
  {
    title: "Self-Portfolio Website",
    description: "This project in React + Vite portfolio website.",
    tech: ["React", "Vite", "JavaScript"],
    link: "https://github.com/Nagiecu/nagiecu.github.io.git",
    //video: "/videos/portfolio-preview.mp4", // aggiunto
  },
  {
    title: "Erasmus Torino",
    description: "Website made in Wordpress.",
    tech: ["Wordpress"],
    link: "https://www.erasmustorino.it/",
    //video: null, // nessun video
  },
];

export default function Projects() {
  return (
    <section>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 mb-6">
      <h2 className="text font-bold">Projects</h2>
      <ul>
        {projects.map(({ title, description, tech, link }) => (
          <li key={title} style={{ marginBottom: 15 }}>
            <a href={link} target="_blank" rel="noreferrer" style={{ fontWeight: "bold", color: "#007acc" }}>
              {title}
            </a>
            <p>{description}</p>
            <small>Tech: {tech.join(", ")}</small>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
