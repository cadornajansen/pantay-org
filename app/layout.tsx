import "./globals.css";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "P.A.N.T.A.Y | Pantay ang Boses ng Bawat Isa",
  description:
    "P.A.N.T.A.Y Foundation promotes human rights awareness and social justice through community-based education, leadership, and inclusive engagement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} min-h-screen bg-[#f7f2ea] text-[#2b1d16]`}
      >
        {children}
      </body>
    </html>
  );
}
