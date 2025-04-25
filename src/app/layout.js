import './globals.css'

export const metadata = {
  title: "Strata Management",
  description: "A website for managing the Owners Corporation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
