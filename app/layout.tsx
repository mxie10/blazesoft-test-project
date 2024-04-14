/*
* @Author Kevin Xie
* Simple book list app with basic crud operations
* Developed by Next.js, version 14.2.1
*/

'use client';
import ReduxProvider from '@/app/components/ReduxProvider';
import AddBookModal from '@/app/components/modals/AddBookModal';
import BookDetailsModal from '@/app/components/modals/BookDetailsModal';
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
