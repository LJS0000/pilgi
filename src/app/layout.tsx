import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ReactQueryProvider from './provider';
import './globals.css';
import { Header } from '@components/feature';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '필기 PILGI',
  description: '필기 내용을 바로 클라우드에 업로드 해보세요',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="antialiased font-pretendard">
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
