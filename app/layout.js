import localFont from "next/font/local";
import "./globals.css";
import Footer from "./global/Footer";
import ComprehensivePreloader from "./components/Loader";

const roboto_mono = localFont({
  src: "./fonts/RobotoMono-Medium.ttf",
  variable: "--font-roboto-mono",
  weight: "100 900",
});
const neue = localFont({
  src: "./fonts/neue-machinabold.ttf",
  variable: "--font-neue",
  weight: "100 900",
});

export const metadata = {
  title: "Copy of OsirisiVr",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable} ${neue.variable}  antialiased`}>
        <ComprehensivePreloader>
          {children}
          <Footer />
        </ComprehensivePreloader>
      </body>
    </html>
  );
}
