export const metadata = {
  title: "Petrdex",
  description: "The ultimate Petr sticker collector site!",
};

import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
