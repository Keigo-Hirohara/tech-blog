import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import type { Metadata } from 'next';
import '../styles/reset.scss';

export const metadata: Metadata = {
  title: 'AppGram',
  description: 'Tech Blog managed by Hirokei',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
