function showInfo(place) {

  const data = {
    Beach: {
      title: "Beautiful Beaches",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text: "Location: Goa, Maldives, Bali\n\nHighlights: Golden sand, sunset views, water sports.\n\nBest Time: October to March."
    },

    Tropical: {
      title: "Tropical Paradise",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      text: "Location: Hawaii, Thailand\n\nHighlights: Palm trees, clear water, warm climate."
    },

    Mountain: {
      title: "Majestic Mountains",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      text: "Location: Himalayas, Alps\n\nHighlights: Trekking, snow peaks."
    },

    City: {
      title: "Modern Cities",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      text: "Location: New York, Tokyo, Mumbai\n\nHighlights: Night lights, culture."
    },

    Night: {
      title: "Night Views",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      text: "Urban skylines with beautiful night photography."
    },

    Valley: {
      title: "Green Valleys",
      img: "https://t4.ftcdn.net/jpg/01/62/72/27/360_F_162722713_TIzFCpEJCOaBv7aPwO8ZcmyTUZPGTwOn.jpg",
      text: "Location: Kashmir, Switzerland\n\nHighlights: Green fields and rivers."
    }
  };

  document.getElementById("modalTitle").innerText = data[place].title;
  document.getElementById("modalImage").src = data[place].img;
  document.getElementById("modalContent").innerText = data[place].text;

  let modal = new bootstrap.Modal(document.getElementById('infoModal'));
  modal.show();
}
