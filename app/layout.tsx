'use client';
import ReduxProvider from './components/ReduxProvider';
import AddBookModal from './components/modals/AddBookModal';
import BookDetailsModal from './components/modals/BookDetailsModal';
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
          <BookDetailsModal/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
