import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html >
      <body 
        className="h-screen w-screen "
      >
        {children}
      </body>
    </html>
  );
}
