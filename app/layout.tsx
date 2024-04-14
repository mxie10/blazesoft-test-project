'use client';

import ReduxProvider from './components/ReduxProvider';
import AddBookModal from './components/modals/AddBookModal';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AddBookModal/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
