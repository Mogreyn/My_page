"use client";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <html lang="en" data-lt-installed="true">
      <body>
        <Header />
        <div ref={ref} className={`animate ${inView ? "in-view" : ""}`}>
          {children}
        </div>
        <section id="contact">
          <Footer />
        </section>
      </body>
    </html>
  );
}
