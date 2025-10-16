export default ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),
    connection: env("DATABASE_CLIENT") === "sqlite"
      ? {
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        }
      : {
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "my_eazystrapi_db"),
          user: env("DATABASE_USERNAME", "my_eazystrapi_db_user"),
          password: env("DATABASE_PASSWORD", "10zif9zwh41LNFy8juYsGFppIGHaH1oe"),
          ssl: env.bool("DATABASE_SSL", true) ? { rejectUnauthorized: false } : false,
        },
    useNullAsDefault: true,
  },
});
