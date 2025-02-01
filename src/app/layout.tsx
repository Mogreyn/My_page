import "./globals.scss";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
