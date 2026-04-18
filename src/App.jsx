import React from 'react';

// --- NAVBAR FIJO (Modo Oscuro Siempre) ---
const Navbar = () => (
  <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <span className="font-bold text-xl text-blue-400">DS</span>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-blue-400 transition">Inicio</a>
          <a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a>
          <a href="#certificaciones" className="hover:text-blue-400 transition">Certificados</a>
          <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
        </div>
      </div>
    </div>
  </nav>
);

// --- COMPONENTE DE HABILIDADES ---
const Skills = () => {
  return (
    <section className="py-20 bg-slate-900 px-10">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">Stack Tecnológico</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-white">Backend & Databases</h3>
          <ul className="text-slate-400 space-y-2">
            <li>• Java (Spring Boot)</li>
            <li>• Node.js & Express</li>
            <li>• .NET Core & PHP</li>
            <li>• MySQL, MariaDB & SQL Server</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-emerald-500 hover:transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
          <ul className="text-slate-400 space-y-2">
            <li>• React & Angular</li>
            <li>• JavaScript (ES6+)</li>
            <li>• Tailwind CSS y diseño responsivo</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border-t-4 border-purple-500 hover:transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4 text-white">Infraestructura & DevOps</h3>
          <ul className="text-slate-400 space-y-2">
            <li>• Linux (Software Libre)</li>
            <li>• Docker y Virtualización</li>
            <li>• Redes Cisco & OSPF</li>
            <li>• Monitoreo (Uptime Kuma)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE DE TARJETA DE CERTIFICADO ---
const CertificateCard = ({ title, institution, date, imageUrl }) => (
  <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] flex flex-col gap-4 cursor-pointer">
    <div className="w-full h-56 bg-slate-950 rounded-lg overflow-hidden flex items-center justify-center border border-slate-800">
      <img src={imageUrl} alt={title} className="w-full h-full object-contain p-2" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-blue-400 text-sm font-medium mt-1">{institution}</p>
      <p className="text-slate-500 text-xs mt-1">{date}</p>
    </div>
  </div>
);

// --- COMPONENTE DE EXPERIENCIA ---
const Experience = () => {
  const jobs = [
    {
      role: "Becario de Recursos Humanos / IT",
      place: "Ministerio de Industria, Trabajo y Comercio",
      date: "Marzo 2020 – Actualidad",
      description: [
        "Gestión integral del sistema de sueldos y procesos ABM.",
        "Administración de infraestructura tecnológica y redes.",
        "Resolución de incidencias críticas y recuperación de datos."
      ]
    },
    {
      role: "Pasante Administrativo Técnico",
      place: "Ministerio de Industria, Trabajo y Comercio",
      date: "Marzo 2018 – Diciembre 2020",
      description: [
        "Mantenimiento preventivo y correctivo del parque informático.",
        "Configuración de entornos de trabajo y despliegue de software.",
        "Garantía de conectividad en redes locales."
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 px-10 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Trayectoria Profesional</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-500 hover:bg-slate-800/50 p-6 rounded-r-xl transition">
            <div className="absolute -left-[9px] top-7 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
            <span className="text-blue-400 font-mono text-sm">{job.date}</span>
            <h3 className="text-xl font-bold text-white mt-1">{job.role}</h3>
            <p className="text-slate-400 font-medium mb-3">{job.place}</p>
            <ul className="space-y-2">
              {job.description.map((item, i) => (
                <li key={i} className="text-slate-500 text-sm flex items-start">
                  <span className="mr-2 text-blue-500">▹</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE DE EDUCACIÓN ---
const Education = () => {
  return (
    <section id="educacion" className="py-20 bg-slate-800/30 px-10 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Formación Académica</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Licenciatura - Texto */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg flex flex-col justify-center">
          <span className="text-blue-400 text-sm font-mono">2019 – Presente</span>
          <h3 className="text-xl font-bold text-white mt-2">Licenciatura en Sistemas de la Información</h3>
          <p className="text-slate-400">Universidad Nacional del Nordeste (UNNE)</p>
          <p className="text-slate-500 text-sm mt-3">Estudiante avanzado con enfoque en arquitectura de sistemas y gestión de proyectos IT.</p>
        </div>

        {/* Diplomatura - Ahora con el CertificateCard integrado */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-900 p-6 rounded-t-xl border-x border-t border-slate-700 shadow-lg">
            <span className="text-emerald-400 text-sm font-mono">Finalizada en 2025</span>
            <h3 className="text-xl font-bold text-white mt-2">Diplomatura en Software Libre</h3>
            <p className="text-slate-400">FaCENA - UNNE</p>
          </div>
          {/* Reutilizamos tu CertificateCard aquí para mostrar el JPG */}
          <CertificateCard 
            title="Certificado"
            institution="UNNE"
            date="Diciembre 2025"
            imageUrl="Diplomatura.jpg" 
          />
        </div>

      </div>
    </section>
  );
};

// --- COMPONENTE DE CONTACTO ---
const ContactForm = () => (
  <section id="contacto" className="py-20 px-10 bg-slate-900 border-t border-slate-800">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Contacto</h2>
      <form action="https://formspree.io/f/tu-codigo" method="POST" className="space-y-6">
        <div>
          <label className="block text-slate-400 text-sm mb-2">Nombre</label>
          <input name="name" type="text" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition" placeholder="Tu nombre..." />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-2">Email</label>
          <input name="email" type="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition" placeholder="tu@email.com" />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-2">Mensaje</label>
          <textarea name="message" rows="4" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition" placeholder="Hola Diego, me interesa tu perfil..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-lg">
          Enviar Mensaje
        </button>
      </form>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL ---
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans scroll-smooth">
      <Navbar />
      
      {/* SECCIÓN HERO */}
      <header className="h-screen flex flex-col justify-center items-center text-center p-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-400 mb-4">
          Diego Fernando Solis Rojas
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
          Desarrollador Full Stack & Especialista en Infraestructura Tecnológica.
        </p>
        
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="https://github.com/SDiego14" target="_blank" rel="noopener noreferrer" className="bg-slate-800 border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-full font-semibold transition flex items-center gap-2">GitHub</a>
          <a href="https://www.linkedin.com/in/diego-solis-9977a2277/" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] hover:bg-[#005885] px-6 py-3 rounded-full font-semibold transition">LinkedIn</a>
          <a href="/Cv-Solis Rojas_Diego Fernando.pdf" download="Cv-Solis Rojas_Diego Fernando.pdf" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition shadow-lg">Descargar CV (PDF)</a>
        </div>
      </header>

      {/* SECCIÓN SOBRE MÍ */}
      <section className="py-20 px-10 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Sobre mí</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Estudiante avanzado de Sistemas en la UNNE con experiencia sólida en administración de servidores Linux y virtualización. 
            Me especializo en crear soluciones escalables uniendo el desarrollo de software con la infraestructura crítica.
          </p>
        </div>
      </section>

      <Skills />
      <Experience />
      <Education />

      {/* SECCIÓN PROYECTOS */}
      <section id="proyectos" className="py-20 px-10 bg-slate-800/50">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold mb-2">Sistema de Licencias</h3>
            <p className="text-slate-400 text-sm">Desarrollado para la Dirección de Licencias Corrientes usando Spring Boot y MySQL.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-xl font-bold mb-2">Dolar-App</h3>
            <p className="text-slate-400 text-sm">Dashboard dockerizado con monitoreo integrado mediante Uptime Kuma.</p>
          </div>
        </div>
      </section>

     {/* SECCIÓN CERTIFICACIONES */}
      <section id="certificaciones" className="py-20 px-10 bg-slate-800/30 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Certificaciones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CertificateCard 
              title="> Talentos Digitales_"
              institution="UNNE, TelCo y Polo IT Corrientes"
              date="2025"
              imageUrl="/SOLIS ROJAS Diego Fernando.TD.jpg" 
            />
            <CertificateCard 
              title="Seguridad Informática"
              institution="Educación IT / Especialista"
              date="2021"
              imageUrl="/Diego-Fernando Solis Rojas-SI.jpg"
            />
          </div>
        </div>
      </section>

      <ContactForm />

      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Diego Fernando Solis Rojas - Corrientes, Argentina</p>
      </footer>
    </div>
  );
}

export default App;