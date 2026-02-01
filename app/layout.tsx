import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZYX",
  description: "My name is Zhan Yong Xiang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.className} antialiased select-none`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
