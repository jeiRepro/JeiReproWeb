import { useState, useEffect } from 'react';
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'testimonios', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold text-white">Reprogramación Cuántica</span>
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['inicio', 'servicios', 'testimonios', 'contacto'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize hover:text-purple-300 transition-colors ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm py-4 px-4 space-y-4 animate-fadeIn">
            {['inicio', 'servicios', 'testimonios', 'contacto'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`block capitalize py-2 hover:text-purple-300 transition-colors ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforma Tu Vida desde el Poder Cuántico
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Como Practitioner de PNL y Maestra en Sanación Cuántica, ayudo a personas como tú a liberar bloqueos emocionales, reprogramar patrones limitantes y alinear su energía para manifestar bienestar integral.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1">
                  Agenda tu Sesión
                </a>
                <a href="#servicios" className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-colors">
                  Conoce Mis Servicios
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-purple-500/30 border-4 border-purple-500/30">
                <img 
                  src="https://picsum.photos/id/1027/800/800 " 
                  alt="Maestra de sanación cuántica" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-bold text-lg">María Fernanda López</h3>
                  <p className="text-sm text-purple-300">Practitioner PNL & Maestra en Sanación Cuántica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 bg-gradient-to-b from-black/80 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Servicios</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Sesiones personalizadas enfocadas en tu transformación integral mediante técnicas cuánticas y neurolingüísticas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sesión de Reprogramación Cuántica",
                description: "Desprograma creencias limitantes, resuelve conflictos emocionales y activa tu poder interior para la autogestión de tu salud y bienestar.",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Sanación Epigenética",
                description: "Libera patrones heredados de tus ancestros que afectan tu salud física y emocional, permitiendo un nuevo destino genético.",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )
              },
              {
                title: "Conexión con Propósito de Vida",
                description: "Encuentra claridad sobre tu misión vital y activa los recursos internos necesarios para manifestarla con confianza y determinación.",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v