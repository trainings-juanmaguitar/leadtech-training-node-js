require("dotenv").config();

module.exports = {
  "title": "Leadtech Javascript Training - Documentation",
  "links": {
    "sidebar": {
      "1️⃣ Apuntes Principiante": "https://apuntes-javascript-principiante.netlify.com/",
      "2️⃣ Apuntes Intermedio": "https://apuntes-javascript-intermedio.netlify.com/",
      "3️⃣ Apuntes Avanzado": "https://apuntes-javascript-avanzado.netlify.com/",
      "😎 JuanMa DEV Blog": "https://juanma.dev/",
      "👨‍🏫 CodeMentor ": "https://www.codementor.io/juanmagarrido"
    }
  },
  "plugins": [
    "github-embed",
    "anchorjs",
    "video",
    "disqus",
    "noembed",
    "embed-pdf"
  ],
  "pluginsConfig": {
    "github-embed": {
      token: process.env.GITHUB_API_TOKEN
    },
    "sharing": {
      "google": false,
      "facebook": false,
      "twitter": false
    },
    "disqus": {
      "shortName": "leadtech-training"
    },
    "anchorjs": {
      "selector": "h2,h3,h4,h5",
      "icon": "#",
      "placement": "left",
      "visible": "always",
      "class": "custom-class another-one",
      "truncate": 64,
      "ariaLabel": "Anchor"
    }
  }
}