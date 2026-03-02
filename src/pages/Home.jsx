
export default function Home(){
  return (
    <>
      <section className="bg-gradient-to-b from-brand-gray-50 to-white border-b">
        <div className="section grid md:grid-cols-2 gap-8 items-center py-10 md:py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-gray-900">
              Cement <span className="text-brand-red-600">Solid Blocks</span>,
              Paver Blocks & Tiles
            </h1>
            <p className="mt-4 text-brand-gray-600">High‑strength blocks manufactured in Chennai with consistent quality. Ideal for load‑bearing walls, parking areas, and durable flooring.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/quotation" className="btn-primary">Get a Quote</a>
              <a href="/products" className="btn-outline">View Products</a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-brand-gray-600">
              <li className="card p-3">M20–M40 strength (typical)</li>
              <li className="card p-3">Reliable curing & sizing</li>
              <li className="card p-3">Bulk orders & delivery</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video rounded-xl bg-[linear-gradient(135deg,#e11d2f,transparent_60%),linear-gradient(180deg,#f2f4f7,#fff)] border shadow-lg" />
          </div>
        </div>
      </section>

      <section className="section py-10">
        <h2 className="text-2xl font-bold mb-4">Our Range</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-4">
            <h3 className="font-semibold">Solid Blocks</h3>
            <p className="text-sm text-brand-gray-600">400×200×200, 400×200×150, 400×200×100 (mm)</p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">Paver Blocks</h3>
            <p className="text-sm text-brand-gray-600">Interlocking designs for parking & walkways from rubber mould</p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">Cement Tiles</h3>
            <p className="text-sm text-brand-gray-600">Skid‑resistant finishes</p>
          </div>
        </div>
      </section>
    </>
  )
}
