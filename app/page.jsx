export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <section className="bg-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Zona Motos MX</h1>
        <p className="text-xl mb-6">Tus marcas favoritas en un solo lugar</p>
        <a href="https://wa.me/5210000000000" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded text-lg">
          Contáctanos por WhatsApp
        </a>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p>
          En Zona Motos MX ofrecemos una experiencia única para los amantes de las motocicletas. Somos una agencia multimarca comprometida con la calidad, la atención personalizada y la entrega inmediata.
        </p>
      </section>

      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-8">Marcas que manejamos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["Italika", "Vento", "Carabela", "Zontes", "Bajaj", "Italikamotos"].map((marca) => (
            <div key={marca} className="shadow-md p-4 bg-gray-50 rounded">{marca}</div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">¿Por qué elegirnos?</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Entrega inmediata</li>
          <li>Crédito fácil y rápido</li>
          <li>Taller certificado</li>
          <li>Refacciones originales</li>
          <li>Atención personalizada</li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
        <p className="mb-4">¿Buscas una moto? Escríbenos directamente por WhatsApp y te ayudamos.</p>
        <a href="https://wa.me/5210000000000" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded text-lg">
          Escríbenos por WhatsApp
        </a>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        Zona Motos MX © {new Date().getFullYear()} - Todos los derechos reservados
      </footer>
    </main>
  )
}