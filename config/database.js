
  // strapi-api/config/database.js
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'tasks_h0ti'),
        user: env('DATABASE_USERNAME', 'qudsia'),
        password: env('DATABASE_PASSWORD', 'SoVTwx689num9MNcNPM87b5M4ctdbSKD'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: env.bool('DATABASE_SSL', false) ? {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) // SSL config for self-signed certificates
        } : false,
      },
      debug: false,
    },
  });
  