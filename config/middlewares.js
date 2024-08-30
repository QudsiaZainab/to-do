module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['https://to-do-app-frontend-2u8b.onrender.com'], // Replace with your actual domain
      headers: '*',
    },
  },
};
