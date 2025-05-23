import "./globals.css";

export const metadata = {
  title: "GlassGo",
  description: "Custom site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
