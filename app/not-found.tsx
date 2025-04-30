import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Страница не найдена</h2>
      <p className="text-secondary mb-8 max-w-md">
        Возможно, эта страница была перемещена или удалена. Проверьте URL или вернитесь на главную.
      </p>
      <Link 
        href="/"
        className="button button-primary no-underline"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
