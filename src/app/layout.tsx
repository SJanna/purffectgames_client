
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
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
      <body>
          <Navbar />
          <div style={{ margin: "5% 2% 0 2%" }}>{children}</div>
          <Footer />
      </body>
    </html>
  );
}
