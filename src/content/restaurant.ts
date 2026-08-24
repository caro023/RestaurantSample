export const restaurant = {
  // Informazioni generali
  name: "Nome del Ristorante",

  slogan: "Sapori della Tradizione",

  cuisine: "Cucina Italiana",

  description:
    "Breve descrizione del ristorante.",

  // Contatti
  phone: "+39 000 0000000",

  email: "info@ristorante.it",

  address: "Via Roma 1",

  city: "Città",

  mapsEmbed:
    "https://www.google.com/maps?q=Googleplex,+Mountain+View,+CA&output=embed",

  maps: "https://maps.app.goo.gl/",


  // Social

  instagram: "https://www.instagram.com/",

  facebook: "https://www.facebook.com/",

  // Story

  storyTitle: "La Nostra Storia",

  storyText:
    "Inserisci qui la storia del ristorante.",

  // Gallery

    menu: {
        title: "Il Nostro Menu",

        subtitle:
        "Sapori della tradizione preparati con ingredienti di qualità.",

        footer: {
        coverCharge: "€2",
        notes: "I piatti possono variare in base alla stagionalità.",
        allergies: "Per allergie e intolleranze chiedete al personale."
        },

        categories: [
  {
    id: "antipasti",
    label: "Antipasti",
    dishes: [
      {
        name: "Tagliere della Casa",
        description: "Selezione di salumi, formaggi e conserve artigianali.",
        price: "14€",
      },
      {
        name: "Vitello Tonnato",
        description: "Fettine di vitello con salsa tonnata e capperi.",
        price: "13€",
      },
      {
        name: "Flan di Verdure",
        description: "Flan di stagione con fonduta di formaggio.",
        price: "12€",
      },
    ],
  },

  {
    id: "primi",
    label: "Primi",
    dishes: [
      {
        name: "Tajarin al Burro e Salvia",
        description: "Pasta fresca all'uovo con burro fuso e salvia.",
        price: "15€",
      },
      {
        name: "Risotto ai Funghi",
        description: "Risotto cremoso con funghi di stagione.",
        price: "16€",
      },
      {
        name: "Ravioli della Tradizione",
        description: "Ravioli ripieni di carne con sugo dell'oste.",
        price: "17€",
      },
    ],
  },

  {
    id: "secondi",
    label: "Secondi",
    dishes: [
      {
        name: "Brasato al Vino Rosso",
        description: "Brasato cotto lentamente con purè di patate.",
        price: "22€",
      },
      {
        name: "Tagliata di Manzo",
        description: "Tagliata servita con verdure grigliate.",
        price: "24€",
      },
      {
        name: "Filetto di Orata",
        description: "Orata al forno con patate ed erbe aromatiche.",
        price: "23€",
      },
    ],
  },

  {
    id: "dolci",
    label: "Dolci",
    dishes: [
      {
        name: "Tiramisù della Casa",
        description: "Preparato secondo la ricetta tradizionale.",
        price: "7€",
      },
      {
        name: "Panna Cotta",
        description: "Con salsa ai frutti di bosco o caramello.",
        price: "6€",
      },
      {
        name: "Torta di Nocciole",
        description: "Dolce artigianale accompagnato da crema inglese.",
        price: "7€",
      },
    ],
  },
]
  }
};