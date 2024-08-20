import DrawingCanvas from '@/components/Nursery/DrawingCanvas';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <Head>
        <title>ABC Learning Drawing App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">
          ABC Learning Drawing App
        </h1>
        <DrawingCanvas />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-8">
        <Link
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </Link>
      </footer>
    </div>
  );
}