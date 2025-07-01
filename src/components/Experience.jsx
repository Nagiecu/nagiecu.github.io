const experiences = [
  {
    role: "IT Support Technician",
    company: "Sviluppo Sociale Torino",
    period: "2024 - Present",
    details: "Provided IT assistance, network troubleshooting, and software & hardware deployment.",
  },
  {
    role: "Game Developer",
    company: "Shark Cookies",
    period: "2022 - 2023",
    details: "Developed a Hack&Slash game, called 'La Vendetta di Mora.'",
  },
];

export default function Experience() {
  return (
    <section>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 mb-6">
      <h2 className="text font-bold">Experience</h2>
      {experiences.map(({ role, company, period, details }, idx) => (
        <div key={idx} style={{ marginBottom: 15 }}>
          <h3>
            {role} — {company}
          </h3>
          <em>{period}</em>
          <p>{details}</p>
           </div>
      
      ))}
      </div>
    </section>
  );
}
