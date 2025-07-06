```jsx
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
                  src="https://picsum.photos/id/1027/800/800" 
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Terapia Sistémica Cuántica",
                description: "Identifica y resuelve dinámicas inconscientes de tu sistema familiar que afectan tu vida actual, restaurando el equilibrio interno.",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Programación Neuro Lingüística",
                description: "Transforma tu forma de pensar y comunicarte para alcanzar estados mentales óptimos y superar cualquier obstáculo.",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                )
              },
              {
                title: "Sanación Cuántica Energética",
                description: "Restablece el flujo energético en tu cuerpo, eliminando bloqueos que causan desequilibrios físicos y emocionales.",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <div className="mb-4 flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 md:py-24 bg-gradient-to-b from-gray-900/80 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Lo que dicen mis clientes sobre sus experiencias de transformación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Mendoza",
                location: "Caracas, Venezuela",
                quote: "Gracias a las sesiones de reprogramación cuántica he logrado superar años de ansiedad y miedo. Me siento más conectada con mi propósito y plena en mi vida diaria.",
                avatar: "https://picsum.photos/id/1012/100/100"
              },
              {
                name: "Javier Rojas",
                location: "Madrid, España",
                quote: "La sanación epigenética me ayudó a entender y liberar patrones familiares que afectaban mi salud. Hoy estoy en remisión de una enfermedad crónica y con mucha esperanza.",
                avatar: "https://picsum.photos/id/1005/100/100"
              },
              {
                name: "Isabel Torres",
                location: "Ciudad de México",
                quote: "Nunca imaginé que podía sentirme tan libre de mis traumas infantiles. Las técnicas utilizadas son profundas y efectivas. Recomendaría este proceso a cualquiera que busque sanar realmente.",
                avatar: "https://picsum.photos/id/1011/100/100"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-black/80 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenda Tu Sesión</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Estoy aquí para acompañarte en tu proceso de transformación. Completa el formulario o selecciona una opción de pago para comenzar.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                      placeholder="¿En qué puedo ayudarte?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Opciones de Pago</h3>
                
                <div className="space-y-6">
                  <div className="border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-colors">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.5 9.5h19M6 15h12M3 4v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1z" />
                      </svg>
                      <h4 className="font-semibold">PayPal</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Paga de manera segura con tu cuenta de PayPal.</p>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition-colors">
                      Pagar con PayPal
                    </button>
                  </div>

                  <div className="border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-colors">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
                      </svg>
                      <h4 className="font-semibold">Criptomonedas</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Bitcoin, Ethereum, Litecoin u otras criptomonedas.</p>
                    <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full text-sm transition-colors">
                      Pagar con Cripto
                    </button>
                  </div>

                  <div className="border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-colors">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
                      </svg>
                      <h4 className="font-semibold">Tarjeta de Crédito</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Paga con tu tarjeta de crédito de forma segura.</p>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm transition-colors">
                      Pagar con Tarjeta
                    </button>
                  </div>

                  <div className="border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-colors">
                    <div className="flex items-center mb-2">
                      <svg className="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
                      </svg>
                      <h4 className="font-semibold">PagoMóvil Venezuela</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Paga con tu banco local en Venezuela.</p>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm transition-colors">
                      Pagar con PagoMóvil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-lg font-bold text-white">Reprogramación Cuántica</span>
              </div>
              <p className="text-gray-400 mb-4">
                Ayudándote a transformar tu vida desde el poder cuántico y la conexión con tu esencia divina.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-5-9h10v2H7v-2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12c0 3.26.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.26 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.687.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {['inicio', 'servicios', 'testimonios', 'contacto'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link}`} 
                      className="text-gray-400 hover:text-purple-400 transition-colors capitalize"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">tucorreo@example.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+58 123 456 7890</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Online - Disponible globalmente</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Reprogramación Cuántica. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">
              Desarrollado por <a href="#" className="text-purple-400 hover:underline">Tu Nombre</a> | 
              Diseño y mantenimiento web profesional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```