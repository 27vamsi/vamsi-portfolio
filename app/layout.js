import "./globals.css";

export const metadata = {
  title: "Vamsi Marella",
  description:
    "Sesha Sai Vamsi Marella : backend engineer. Trading engines, backend APIs, data pipelines, and blockchain infrastructure."
};

// Applies the stored theme before first paint so the page never flashes the wrong one.
const THEME_BOOT = `try{var t=localStorage.getItem('vm-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Spline+Sans+Mono:wght@400;500;600&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
