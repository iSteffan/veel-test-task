import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'To-do',
  description: 'Veel test task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
