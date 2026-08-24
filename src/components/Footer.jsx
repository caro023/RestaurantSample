import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { restaurant } from "../content/restaurant";

function Footer() {
  return (
    <footer className="bg-wine-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-semibold">{restaurant.name}</p>
            <p className="mt-1 text-cream-300">{restaurant.cousine}</p>
          </div>
          <div className="flex gap-4">
            <a
              href={restaurant.phone}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://maps.app.goo.gl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <MapPin className="h-5 w-5" />
            </a>
            {restaurant.instagram && (
              <a
                href={restaurant.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}

            {restaurant.facebook && (
              <a
                href={restaurant.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-cream-300">
          <p> {restaurant.address} - {restaurant.city} | Tel: {restaurant.phone}</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {restaurant.name}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

export {Footer}