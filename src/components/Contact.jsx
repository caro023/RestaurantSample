import {
  MapPin,
  Phone,
  Clock,
} from 'lucide-react';
import { restaurant } from "../content/restaurant";

function Contact({ onOpenReservation }) {
  return (
    <section id="contatti" className="bg-cream-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-terracotta-600">
            Vieni a Trovarci
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-wine-800 md:text-5xl">
            Contatti
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-100">
                <MapPin className="h-5 w-5 text-terracotta-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-wine-800">Indirizzo</h3>
                <p className="text-gray-600">{restaurant.name}</p>
                <p className="text-gray-600">{restaurant.city} </p>
                <a
                  href={restaurant.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-terracotta-600 hover:underline"
                >
                  Apri in Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-100">
                <Phone className="h-5 w-5 text-terracotta-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-wine-800">Telefono</h3>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-gray-600 hover:text-terracotta-600"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-100">
                <Clock className="h-5 w-5 text-terracotta-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-wine-800">Orari</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Lunedì - Venerdì: 07:00 - 15:00, 19:00 - 23:00</p>
                  <p>Sabato - Domenica: 12:00 - 15:00, 19:00 - 23:00</p>
                </div>
              </div>
            </div>

            {/* Pulsante che apre il modale */}
            <button
              onClick={onOpenReservation}
              className="inline-block rounded-full bg-terracotta-600 px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-terracotta-700 hover:shadow-lg"
            >
              Prenota un Tavolo
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Googleplex,+Mountain+View,+CA&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Trattoria San Paolo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contact };