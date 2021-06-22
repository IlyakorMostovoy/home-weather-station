# API для Home Dashboard

## Начальная настройка, чтобы запустить API локально

1. Создаём файл окружения `.env` на основе `.env.sample`

2. Устанавливаем `node_modules`

   ```bash
   npm i
   ```

3. Устанавливаем утилиту `sequelize-cli` для работы с БД

   ```bash
   npm install sequelize-cli -g
   ```

4. Создаём БД
   ```bash
   sequelize db:create
   ```
5. Создаём структуру БД (миграции)
   ```bash
   sequelize db:migrate
   ```
6. Добавляем данные в БД

   ```bash
   sequelize db:seed:all
   ```

7. Запускаем сервер API

   API будет доступно на порту указанном в переменной окружения `PORT` файла `.env`

   ```bash
   npm start
   ```
