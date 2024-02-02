import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "The Software Academy",
  description:
    "Iti doresti nota 10 (zece) la BAC ? Am pregatit o programa prietenoasa si eficienta doar pentru tine!",
  icons: {
    icon: "/apple.png",
    apple: "/apple.png",
    other: {
      rel: "apple-icon",
      url: "/apple.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
