import ThemeToggle from './components/ThemeToggle.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import GianPhoto from './assets/gianSquare.jpg';

export default function App() {
  return (
    <div className="bg-gray dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500 p-6 max-w-4xl mx-auto font-sans">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={GianPhoto}
            alt="Gian Manuel Cuenca"
            className="w-40 h-40 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
          />
          <h1 className="text-2xl md:text-4xl font-bold">
            Gian Manuel Cuenca <br className="md:hidden" /> 
          </h1>
          
        </div>
        <ThemeToggle />
      </header>

      <main className="space-y-10">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 GMC
      </footer>
    </div>
  );
}
