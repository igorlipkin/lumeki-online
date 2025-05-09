import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  author?: string;
  description?: string;
  tags?: string[];
  readingTime?: string;
  image?: string;
}

export interface Post extends PostMetadata {
  content: string;
}

export async function getPosts(): Promise<PostMetadata[]> {
  // Проверка существования директории
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    } catch (error) {
    console.error('Ошибка при чтении постов:', error);
    return [];
  }
}
  } catch (error) {
    console.error('Ошибка при проверке директории постов:', error);
    return [];
  }

  try {
    // Получение всех файлов из директории
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
      .filter(fileName => {
        // Фильтрация только .md и .mdx файлов
        return fileName.endsWith('.mdx') || fileName.endsWith('.md');
      })
      .map(fileName => {
        // Удаление расширения для создания slug
        const slug = fileName.replace(/\.mdx?$/, '');
        
        // Чтение файла и получение frontmatter
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Вычисление времени чтения
        const stats = readingTime(content);
        const readingTimeText = `${Math.ceil(stats.minutes)} мин чтения`;
        
        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          author: data.author,
          tags: data.tags,
          image: data.image,
          readingTime: readingTimeText,
        };
      });
    
    // Сортировка постов по дате (от новых к старым)
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
export async function getPosts(): Promise<PostMetadata[]> {
  // Проверка существования директории
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
  } catch (error) {
    console.error('Ошибка при проверке директории постов:', error);
    return [];
  }

  try {
    // Получение всех файлов из директории
    const fileNames = fs.readdirSync(postsDirectory);
    
    const posts = fileNames
      .filter(fileName => {
        // Фильтрация только .md и .mdx файлов
        return fileName.endsWith('.mdx') || fileName.endsWith('.md');
      })
      .map(fileName => {
        // Удаление расширения для создания slug
        const slug = fileName.replace(/\.mdx?$/, '');
        
        // Чтение файла и получение frontmatter
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Вычисление времени чтения
        const stats = readingTime(content);
        const readingTimeText = `${Math.ceil(stats.minutes)} мин чтения`;
        
        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          author: data.author,
          tags: data.tags,
          image: data.image,
          readingTime: readingTimeText,
        };
      });
    
    // Сортировка постов по дате (от новых к старым)
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Ошибка при чтении постов:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Проверяем существование файла .mdx
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Конвертируем markdown в HTML
      const processedContent = await remark()
        .use(html)
        .process(content);
      
      const contentHtml = processedContent.toString();
      
      // Вычисление времени чтения
      const stats = readingTime(content);
      const readingTimeText = `${Math.ceil(stats.minutes)} мин чтения`;
      
      return {
        slug,
        content: contentHtml,
        title: data.title,
        date: data.date,
        description: data.description || '',
        author: data.author || 'Команда Lumeki',
        tags: data.tags || [],
        image: data.image || '',
        readingTime: readingTimeText,
      };
    }
    
    // Проверяем существование файла .md если .mdx не найден
    const mdPath = path.join(postsDirectory, `${slug}.md`);
    if (fs.existsSync(mdPath)) {
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Конвертируем markdown в HTML
      const processedContent = await remark()
        .use(html)
        .process(content);
      
      const contentHtml = processedContent.toString();
      
      // Вычисление времени чтения
      const stats = readingTime(content);
      const readingTimeText = `${Math.ceil(stats.minutes)} мин чтения`;
      
      return {
        slug,
        content: contentHtml,
        title: data.title,
        date: data.date,
        description: data.description || '',
        author: data.author || 'Команда Lumeki',
        tags: data.tags || [],
        image: data.image || '',
        readingTime: readingTimeText,
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Ошибка при получении поста ${slug}:`, error);
    return null;
  }
}
