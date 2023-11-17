import Footer from "@/Components/Layout/Footer";
import Navbar from "@/Components/Layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purffect Games",
  description: "Video games store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ minHeight: "98vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div style={{ margin: "5% 2% 0 2%" }}>
          {children}
          <div style={{ height: "10vh" }}></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
