import {
  MapPin,
  UtensilsCrossed,
} from 'lucide-react';

function Story() {
  return (
    <section id="storia" className="bg-cream-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-terracotta-600">
              La Nostra Tradizione/storia
            </p>
            <h2 className="mb-6 font-display text-4xl font-bold text-wine-800 md:text-5xl">
              Un titolo
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Questa sezione racconta la storia del ristorante.
              </p>
              <p>
               Inserisci qui la tradizione, la filosofia e l'atmosfera del locale 
              </p>
              <p>
                Inserisci qui una breve storia del ristorante.
                Puoi raccontare quando è nato, la tradizione familiare,
                la cucina proposta e la filosofia del locale.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100">
                  <UtensilsCrossed className="h-5 w-5 text-terracotta-600" />
                </div>
                <div>
                  <p className="font-semibold text-wine-800">Tipo di cucina</p>
                  <p className="text-sm text-gray-600">Ricette autentiche</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100">
                  <MapPin className="h-5 w-5 text-terracotta-600" />
                </div>
                <div>
                  <p className="font-semibold text-wine-800">KM Zero</p>
                  <p className="text-sm text-gray-600">Prodotti del territorio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src='./images/story.png'
              alt="Interno della trattoria"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-wine-800 p-6 text-white shadow-xl">
              <p className="text-3xl font-bold">prezzo circa</p>
              <p className="text-sm text-cream-300">a persona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export {Story};
