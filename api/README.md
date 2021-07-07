# API for Home Dashboard

## Initial setup to run API

1. Install [PostgreSQL](https://www.postgresql.org/download/)

2. Create an environment file `.env` based on `.env.sample`

3. Install `node_modules`

   ```bash
   npm i
   ```

4. Install `sequelize-cli` to work with database

   ```bash
   npm install sequelize-cli -g
   ```

5. Create database
   ```bash
   sequelize db:create
   ```
6. Create database structure (migrations)
   ```bash
   sequelize db:migrate
   ```
7. Add data to database (seeds)

   ```bash
   sequelize db:seed:all
   ```

8. Start API server

   ```bash
   npm start
   ```

   API will be available on port specified in the `PORT` environment variable of `.env` file
