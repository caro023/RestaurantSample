import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu as MenuIcon,
  X,
} from 'lucide-react';
import { Story } from './components/Story.jsx';
import { Gallery } from './components/Gallery.jsx';
import { Footer } from './components/Footer.jsx';
import { Contact } from './components/Contact.jsx';
import { MenuSection } from './components/MenuSection.tsx';
import { restaurant } from "./content/restaurant";

const heroImages = [
  '/images/hero1.png',
  '/images/hero2.png',
];

// --- Nuovo componente Navbar (fissa in alto) ---
function Navbar({ onOpenReservation }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wine-900/90 backdrop-blur-sm px-4 py-2 md:px-8 md:py-3 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold text-white md:text-2xl">
            {restaurant.name}
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#storia" className="text-sm text-white/90 transition-colors hover:text-white md:text-base">
              {restaurant.storyTitle}
            </a>
            <a href="#menu" className="text-sm text-white/90 transition-colors hover:text-white md:text-base">
              Menu
            </a>
            <a href="#contatti" className="text-sm text-white/90 transition-colors hover:text-white md:text-base">
              Contatti
            </a>
            <button
              onClick={onOpenReservation}
              className="rounded-full bg-terracotta-600 px-4 py-1.5 text-sm text-white transition-all hover:bg-terracotta-700 md:px-5 md:py-2 md:text-base"
            >
              Prenota
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Apri menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-wine-900 md:hidden">
          <div className="flex items-center justify-between p-6">
            <span className="font-display text-xl text-white">{restaurant.name}</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
              aria-label="Chiudi menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-20">
            <a
              href="#storia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-white/90 hover:text-white"
            >
              {restaurant.storyTitle}
            </a>
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-white/90 hover:text-white"
            >
              Menu
            </a>
            <a
              href="#contatti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-white/90 hover:text-white"
            >
              Contatti
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="mt-4 rounded-full bg-terracotta-600 px-8 py-3 text-lg text-white"
            >
              Prenota
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

// --- Hero (solo immagini e contenuto centrale, senza navbar) ---
function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {heroImages.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`${restaurant.name} ${idx + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cream-300 opacity-0 animate-fade-in-up">
          {restaurant.cuisine}
        </p>
        <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-shadow-lg md:text-7xl lg:text-8xl opacity-0 animate-fade-in-up animation-delay-100">
          {restaurant.name}
        </h1>
        <p className="mb-8 max-w-xl text-lg text-cream-200 md:text-xl opacity-0 animate-fade-in-up animation-delay-200">
          {restaurant.slogan} <br />
          {restaurant.address}
        </p>
        <a
          href="#menu"
          className="group inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-wine-800 opacity-0 animate-fade-in-up animation-delay-300"
        >
          Scopri il Menu
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// --- MobileMenu (modificato) ---
function MobileMenu({ onOpenReservation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white"
        aria-label="Apri menu"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-wine-900">
          <div className="flex items-center justify-between p-6">
            <span className="font-display text-xl text-white">{restaurant.name}</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Chiudi menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-20">
            <a
              href="#storia"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white/90 hover:text-white"
            >
              {restaurant.storyTitle}
            </a>
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white/90 hover:text-white"
            >
              Menu
            </a>
            <a
              href="#contatti"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white/90 hover:text-white"
            >
              Contatti
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenReservation();
              }}
              className="mt-4 rounded-full bg-terracotta-600 px-8 py-3 text-lg text-white"
            >
              Prenota
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

function ReservationModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    telefono: '',
    persone: 2,
    data: '',
    ora: '20:00',
  });

  // Date non disponibili (demo)
  const dateUnavailable = ['2026-12-25', '2026-08-15'];
  const isAvailable = formData.data ? !dateUnavailable.includes(formData.data) : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione campi
    if (!formData.nome || !formData.cognome || !formData.telefono || !formData.data || !formData.ora) {
      onShowToast({ message: 'Compila tutti i campi obbligatori.', type: 'error' });
      return;
    }

    // Controllo disponibilità
    if (!isAvailable) {
      onShowToast({
        message: 'Mi dispiace, per questa data non ci sono più tavoli disponibili.',
        type: 'error',
      });
      return;
    }

    // Successo: chiudi il modale subito e mostra toast verde
    onClose();
    onShowToast({
      message: `Prenotazione confermata per ${formData.nome} ${formData.cognome} il ${formData.data} alle ${formData.ora}.`,
      type: 'success',
    });

    // Reset del form dopo un breve ritardo (per evitare che si veda il contenuto mentre si chiude)
    setTimeout(() => {
      setFormData({
        nome: '',
        cognome: '',
        telefono: '',
        persone: 2,
        data: '',
        ora: '20:00',
      });
    }, 300);
  };

  const handleClose = () => {
    onClose();
    // Reset del form quando si chiude manualmente
    setFormData({
      nome: '',
      cognome: '',
      telefono: '',
      persone: 2,
      data: '',
      ora: '20:00',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Chiudi form"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-display text-wine-800 mb-6">Prenota un tavolo</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cognome *</label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Numero di persone</label>
            <input
              type="number"
              name="persone"
              value={formData.persone}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data *</label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ora *</label>
            <input
              type="time"
              name="ora"
              value={formData.ora}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
              required
            />
          </div>

          {formData.data && (
            <div className={`p-3 rounded-lg text-sm ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isAvailable
                ? '✅ Il tavolo è disponibile per questa data!'
                : '❌ Mi dispiace, per questa data non ci sono più tavoli disponibili.'}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Conferma prenotazione
          </button>
        </form>
      </div>
    </div>
  );
}

// --- App principale ---
function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => {
    setIsReservationOpen(false);
    // Non resettare il toast qui, altrimenti scompare subito
  };

  // Auto‑chiusura del toast dopo 2 secondi
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="font-body">
      <Navbar onOpenReservation={openReservation} />
      <Hero />
      <Story />
      <MenuSection />
      <Gallery />
      <Contact onOpenReservation={openReservation} />
      <Footer />

      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={closeReservation}
        onShowToast={setToast} // passiamo la funzione per mostrare il toast
      />

      {/* TOAST - renderizzato fuori dal modale */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          <div className="flex items-center gap-4">
            <span>{toast.message}</span>
            <button
              onClick={() => setToast(null)}
              className="text-white/80 hover:text-white"
              aria-label="Chiudi notifica"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;