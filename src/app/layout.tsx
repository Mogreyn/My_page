"use client";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header/Header";
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });

  return (
    <html lang="en" data-lt-installed="true">
      <body>
        <Header />
        <div ref={ref} className={inView ? "animate" : ""}>
          {children}
        </div>
      </body>
    </html>
  );
}
