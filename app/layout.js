import "./globals.css";

export const metadata = {
  title: "Sesha Sai Vamsi | Portfolio",
  description:
    "Portfolio of Sesha Sai Vamsi – Web3, backend & infra, and AI/ML engineer."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}

