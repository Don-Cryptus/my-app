import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const test = '123123';

  return (
    <div>
      <p>asdasdasd</p>
      <p>{test}</p>
    </div>
  );
}