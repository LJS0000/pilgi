import type { Metadata } from 'next';
import ReactQueryProvider from './provider';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: '필기 PILGI',
  description: '필기 내용을 바로 클라우드에 업로드 해보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
