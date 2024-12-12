# Отзывы о компаниях

## Описание
Это одностраничное приложение, позволяющее пользователям загружать, фильтровать и сортировать отзывы о компаниях. Пользователи могут выбирать платформу, диапазон оценок и сортировать отзывы по времени или рейтингу.

## Функциональность
- Загружает список отзывов с фейкового API.
- Фильтрация отзывов по платформе (Google, Яндекс, 2ГИС) и диапазону оценок.
- Сортировка отзывов по времени (новые/старые) и по рейтингу (по возрастанию/убыванию).
- Отображение отфильтрованного и отсортированного списка в табличной форме.

## Технологии
- **React**: библиотека для построения пользовательских интерфейсов.
- **Redux**: библиотека для управления состоянием приложения.
- **redux-saga**: библиотека для обработки побочных эффектов в Redux.
- **Bootstrap**: CSS-фреймворк для стилизации интерфейса.
- **json-server**: фейковый REST API для разработки.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/V0000DY/habr-hexlet.git
   ```
2. Перейдите в директорию проекта:
    ```bash
    cd название-репозитория
    ```
3. Установите зависимости:
    ```bash
    npm install
    ```
## Запуск приложения
1. Запустите фейковый API с помощью json-server:
    ```bash
    npm run start:api
    ```
    Это запустит сервер на http://localhost:5000.
2. В другом терминале запустите приложение:
    ```bash
      npm start
    ```
3. Теперь ваше приложение доступно по адресу http://localhost:3000.
## Использование

1. **Загрузка отзывов**:
   - Отзывы загружаются автоматически с фейкового API при запуске приложения.

2. **Добавление нового отзыва**:
   - Заполните форму, указав платформу, рейтинг (от 1 до 5) и текст отзыва.
   - Нажмите кнопку "Добавить отзыв", чтобы сохранить новый отзыв. Он будет добавлен в таблицу.

3. **Отображение отзывов**:
   - Все отзывы будут отображены в таблице с колонками: Платформа, Рейтинг, Дата и Текст отзыва.

4. **Фильтрация и сортировка (если реализовано)**:
   - Вы можете фильтровать отзывы по платформеб ретингу и дате добавления.
   - Отзывы могут быть отсортированы по времени или рейтингу.
## Участники
Виталий Рубцов — Основной разработчик