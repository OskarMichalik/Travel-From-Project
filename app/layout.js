import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Roamify",
  description: "A mock project for searching flights",
  author: "Oskar Michalik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="header-space" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
