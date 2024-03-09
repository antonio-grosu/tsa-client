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
  keywords: [
    "science",
    "software",
    "software academy",
    "the software academy",
    "informatics",
    "programming",
    "computer science",
    "software development",
    "coding",
    "programming languages",
    "web development",
    "algorithm",
    "data structures",
    "software engineering",
    "computer architecture",
    "machine learning",
    "artificial intelligence",
    "cybersecurity",
    "networking",
    "database management",
    "operating systems",
    "mobile app development",
    "cloud computing",
    "big data",
    "data science",
    "blockchain",
    "IoT (Internet of Things)",
    "game development",
    "software testing",
    "agile methodology",
    "informatică",
    "programare",
    "știința calculatoarelor",
    "dezvoltare software",
    "codificare",
    "limbaje de programare",
    "dezvoltare web",
    "algoritmi",
    "structuri de date",
    "inginerie software",
    "arhitectura calculatoarelor",
    "învățare automată",
    "inteligență artificială",
    "securitate cibernetică",
    "rețelistică",
    "gestionare baze de date",
    "sisteme de operare",
    "dezvoltare de aplicații mobile",
    "computație în cloud",
    "big data",
    "știința datelor",
    "blockchain",
    "IoT (Internet of Things)",
    "dezvoltare de jocuri",
    "testare de software",
    "metodologie agilă",
    "Bacalaureat",
    "examen de bacalaureat",
    "subiecte bac informatică",
  ],
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
