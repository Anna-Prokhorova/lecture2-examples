# Lecture2Examples
Драфтовое приложение написано на Angular16. Служит иллюстрацией к Лекции2 (Реактивность часть 1)

## Запуск
После клонирования выполнить `npm i` для установки зависимостей.

Команда `npm run start` запускает фронт-часть приложения и моковый бэкенд (lecture2-mock-api) через `concurrently` (уже прописано в скриптах)

## Структура приложения
![Structure](https://github.com/Anna-Prokhorova/lecture2-examples/assets/59168625/1d5afc04-9a30-4a8d-a4ac-7f6185e0e8b6)

## Моковый бэкенд
Написан на node.js с использованием express. Запускается локально на порту 3000 и при помощи прокси конфига проксируется на http://localhost:4200/api_frontend.

Методы:
- GET (/api_frontend/blue)
  
response: `{
  "data": "Welcome to my BLUE room"
} `
- GET (/api_frontend/green)
     
response: `{
  "data": "Welcome to my GREEN room"
} `
