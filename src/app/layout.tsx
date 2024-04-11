import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other metadata here */}
        <title>Karan | Portfolio</title>
        <meta
          name="description"
          content="Developed by Karan Chaudhary, a highly motivated final year student, eager to learn new technologies and execute projects as per requirements."
        />
      </head>
      <body className={`font-rem`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
