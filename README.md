# Lumeki.online - Блог об ИИ

Минималистичный блог о практическом применении искусственного интеллекта в повседневной жизни и работе. Создан с использованием Next.js и размещен на Vercel.

## 🚀 Быстрый старт

### Разработка локально

1. Клонируйте репозиторий:
```bash
git clone https://github.com/igorlipkin/lumeki-online.git
cd lumeki-online
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
# или
pnpm install
```

3. Запустите сервер разработки:
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

### Деплой на Vercel

#### Вариант 1: Через GitHub
1. Создайте аккаунт на [Vercel](https://vercel.com/) (если еще не создали)
2. Подключите ваш GitHub аккаунт
3. Импортируйте проект из репозитория
4. Следуйте инструкциям мастера установки
5. Укажите ваш домен (lumeki.online) в настройках проекта

#### Вариант 2: Через Vercel CLI
1. Установите Vercel CLI:
```bash
npm i -g vercel
```

2. Войдите в аккаунт:
```bash
vercel login
```

3. Разверните проект:
```bash
vercel
```

## 📝 Создание контента

### Добавление новых статей

1. Создайте новый файл .mdx в директории `content/posts/`
2. Добавьте frontmatter в начале файла:
```
---
title: "Название статьи"
date: "ГГГГ-ММ-ДД"
author: "Имя автора"
description: "Краткое описание статьи"
tags: ["тег1", "тег2"]
---
```

3. Напишите содержимое статьи в формате Markdown

### Работа с содержимым через iPhone

Рекомендуемые опции для редактирования с iPhone:

1. **GitHub Mobile** - прямое редактирование репозитория
2. **Working Copy** - Git клиент для iOS
3. **iA Writer** + GitHub интеграция
4. **Forestry.io** или другая headless CMS

## 🧱 Структура проекта

```
lumeki-online/
├── app/                  # Страницы приложения (Next.js App Router)
├── components/           # React компоненты
├── content/              # MDX контент (статьи)
├── lib/                  # Утилиты и вспомогательные функции
├── public/               # Статические файлы
└── styles/               # CSS стили
```

## 📦 Используемые технологии

- [Next.js](https://nextjs.org/) - React фреймворк
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS фреймворк
- [MDX](https://mdxjs.com/) - Markdown + JSX для контента
- [Vercel](https://vercel.com/) - Платформа для хостинга

## 🤝 Как внести вклад

1. Форкните репозиторий
2. Создайте ветку для вашей фичи (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Добавить новую фичу'`)
4. Отправьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📃 Лицензия

Распространяется под лицензией MIT. См. файл `LICENSE` для получения дополнительной информации.

## 📞 Контакты

Email: yo@lumeki.online
