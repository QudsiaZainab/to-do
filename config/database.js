// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'postgres');

  // const connections = {
    // mysql: {
    //   connection: {
    //     connectionString: env('DATABASE_URL'),
    //     host: env('DATABASE_HOST', 'localhost'),
    //     port: env.int('DATABASE_PORT', 3306),
    //     database: env('DATABASE_NAME', 'strapi'),
    //     user: env('DATABASE_USERNAME', 'strapi'),
    //     password: env('DATABASE_PASSWORD', 'strapi'),
    //     ssl: env.bool('DATABASE_SSL', false) && {
    //       key: env('DATABASE_SSL_KEY', undefined),
    //       cert: env('DATABASE_SSL_CERT', undefined),
    //       ca: env('DATABASE_SSL_CA', undefined),
    //       capath: env('DATABASE_SSL_CAPATH', undefined),
    //       cipher: env('DATABASE_SSL_CIPHER', undefined),
    //       rejectUnauthorized: env.bool(
    //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
    //         true
    //       ),
    //     },
    //   },
    //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    // },
    // mysql2: {
    //   connection: {
    //     host: env('DATABASE_HOST', 'localhost'),
    //     port: env.int('DATABASE_PORT', 3306),
    //     database: env('DATABASE_NAME', 'strapi'),
    //     user: env('DATABASE_USERNAME', 'strapi'),
    //     password: env('DATABASE_PASSWORD', 'strapi'),
    //     ssl: env.bool('DATABASE_SSL', false) && {
    //       key: env('DATABASE_SSL_KEY', undefined),
    //       cert: env('DATABASE_SSL_CERT', undefined),
    //       ca: env('DATABASE_SSL_CA', undefined),
    //       capath: env('DATABASE_SSL_CAPATH', undefined),
    //       cipher: env('DATABASE_SSL_CIPHER', undefined),
    //       rejectUnauthorized: env.bool(
    //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
    //         true
    //       ),
    //     },
    //   },
    //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    // },
  
      // connection: {
      //   client: 'postgres',
      //   connection: {
      //     host: env('DATABASE_HOST', '127.0.0.1'),
      //     port: env.int('DATABASE_PORT', 5432),
      //     database: env('DATABASE_NAME', 'strapi'),
      //     user: env('DATABASE_USERNAME', 'strapi'),
      //     password: env('DATABASE_PASSWORD', 'strapi'),
      //     schema: env('DATABASE_SCHEMA', 'public'), // Not required
      //     ssl: {
      //       rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      //     },
      //   },
      //   debug: false,
      // },
    
    // sqlite: {
    //   connection: {
    //     filename: path.join(
    //       __dirname,
    //       '..',
    //       env('DATABASE_FILENAME', '.tmp/data.db')
    //     ),
    //   },
    //   useNullAsDefault: true,
    // },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };


  // strapi-api/config/database.js
  // module.exports = ({ env }) => ({
  //   connection: {
  //     client: 'postgres',
  //     connection: {
  //       host: env('DATABASE_HOST', 'localhost'),
  //       port: env.int('DATABASE_PORT', 5432),
  //       database: env('DATABASE_NAME', 'tasks'),
  //       user: env('DATABASE_USERNAME', 'postgres'),
  //       password: env('DATABASE_PASSWORD', '123'),
  //       schema: env('DATABASE_SCHEMA', 'public'), // Not required
  //       ssl: false, // Disable SSL
  //     },
  //     debug: false,
  //   },
  // });



  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'dpg-crb6avlsvqrc73etnk7g-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'tasks_h0ti'),
        user: env('DATABASE_USERNAME', 'qudsia'),
        password: env('DATABASE_PASSWORD', 'SoVTwx689num9MNcNPM87b5M4ctdbSKD'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  });
  