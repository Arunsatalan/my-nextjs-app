import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="inter-className"> 
        <div className="container">
          <Navbar />
          {children}
        </div>
          <Footer />
      </body>
    </html>
  );
}
