/*
* @Author Kevin Xie
* Simple book list app with basic crud operations
* Developed by Next.js, version 14.2.1
*/

import ReduxProvider from '@/app/components/ReduxProvider';
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
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
