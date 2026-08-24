import { useState } from 'react';
import { restaurant } from "../content/restaurant";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-terracotta-600">
            Il Nostro Menu
          </p>

          <h2 className="mb-4 font-display text-4xl font-bold text-wine-800 md:text-5xl">
            {restaurant.menu.title}
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            {restaurant.menu.subtitle}
          </p>
        </div>

        {/* Pulsanti categorie */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-4">
          {restaurant.menu.categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all md:px-8 md:text-base ${
                activeCategory === index
                  ? "bg-terracotta-600 text-white shadow-lg"
                  : "bg-cream-200 text-gray-700 hover:bg-cream-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Piatti */}
        <div className="grid gap-6 md:grid-cols-2">
          {restaurant.menu.categories[activeCategory].dishes.map(
            (dish, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-cream-300 bg-cream-50 p-6 transition-all hover:border-terracotta-300 hover:shadow-lg"
              >
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-wine-800">
                    {dish.name}
                  </h3>

                  <span className="flex-shrink-0 rounded-full bg-terracotta-100 px-3 py-1 text-sm font-semibold text-terracotta-700">
                    {dish.price}
                  </span>
                </div>

                <p className="text-gray-600">{dish.description}</p>
              </div>
            )
          )}
        </div>

        {/* Footer menu */}
        <div className="mt-10 rounded-2xl bg-cream-100 p-6 text-center text-gray-600">
          <p>
            <strong>Coperto:</strong> {restaurant.menu.footer.coverCharge}
            {" · "}
            <strong>{restaurant.menu.footer.notes}</strong>
          </p>

          <p className="mt-2 text-sm">
            {restaurant.menu.footer.allergies}
          </p>
        </div>
      </div>
    </section>
  );
}

export { MenuSection };
