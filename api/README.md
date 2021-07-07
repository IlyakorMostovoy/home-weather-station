# API для Home Dashboard

## Начальная настройка, чтобы запустить API локально

1. Устанавливаем [PostgreSQL](https://www.postgresql.org/download/)

2. Создаём файл окружения `.env` на основе `.env.sample`

3. Устанавливаем `node_modules`

   ```bash
   npm i
   ```

4. Устанавливаем утилиту `sequelize-cli` для работы с БД

   ```bash
   npm install sequelize-cli -g
   ```

5. Создаём БД
   ```bash
   sequelize db:create
   ```
6. Создаём структуру БД (миграции)
   ```bash
   sequelize db:migrate
   ```
7. Добавляем данные в БД

   ```bash
   sequelize db:seed:all
   ```

8. Запускаем сервер API

   ```bash
   npm start
   ```

   API будет доступно на порту указанном в переменной окружения `PORT` файла `.env`
