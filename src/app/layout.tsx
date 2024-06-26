import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layouts/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pearly Flower - Hoa tươi, hoa sáp',
  description: 'Hoa tươi,  hoa sáp, hoa tốt nghiệp, hoa chúc mừng giá rẻ, giao nhanh',
};

export default function RootLayout({ children, ...props }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <Layout {...props}>{children}</Layout>
      </body>
    </html>
  );
}
