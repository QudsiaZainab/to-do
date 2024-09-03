module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA'),
      ssl: env.bool('DATABASE_SSL', env('NODE_ENV') === 'production') ? {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)
      } : false,
    },
    debug: env('NODE_ENV') !== 'production',
  },
});
