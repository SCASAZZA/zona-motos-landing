export const metadata = {
    title: 'Zona Motos MX',
    description: 'Tus marcas favoritas en un solo lugar',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
  }
