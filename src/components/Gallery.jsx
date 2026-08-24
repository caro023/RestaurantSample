function Gallery() {
  const images = [
    {
      src: '../images/gallery1.png',
      alt: 'Tagliolini freschi',
    },
    {
      src: '../images/gallery2.png',
      alt: 'Vino Barolo',
    },
    {
      src: '../images/gallery3.png',
      alt: 'Tavola apparecchiata',
    },
    {
      src: '../images/gallery4.png',
      alt: 'Tartufo fresco',
    },
  ];

  return (
    <section className="bg-wine-800 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-terracotta-400">
            Galleria
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            I Nostri Piatti
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {Gallery};