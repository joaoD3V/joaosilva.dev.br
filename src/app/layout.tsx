import type { Metadata } from 'next';
import { Fira_Code, Open_Sans } from 'next/font/google';
import './globals.css';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '700'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | João Silva',
    default: 'João Silva - Full-stack Developer',
  },
  description: 'Antes de tudo, um solucionador de problemas através de código.',
  icons: {
    icon: '/favicon.ico',
  },
  authors: {
    name: 'João Silva',
    url: 'https://joaosilva.dev.br',
  },
  openGraph: {
    title: 'João Silva - Full-stack Developer',
    description:
      'Antes de tudo, um solucionador de problemas através de código.',
    images: ['/opengraph-image.webp'],
    authors: 'João Silva',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${openSans.variable} ${firaCode.variable}`} lang="pt-BR">
      <body className="min-h-screen scroll-smooth antialiased ">
        <Header />
        <main className="container mx-auto my-12 px-4 md:px-32 lg:my-24 2xl:px-56">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
