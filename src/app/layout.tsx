import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

export const metadata = {
  title: "Qui Nguyen's Portfolio Website",
  description: "Generate by create next app",
  keywords: [
    "Developer Portfolio",
    "Mobile Development",
    "NextJS",
    "TailwindCSS",
    "TypeScript",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="text-red flex h-screen flex-col">
        <main className="flex min-h-screen justify-center">{children}</main>
      </body>
    </html>
  );
}
