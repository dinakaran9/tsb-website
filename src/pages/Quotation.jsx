
import { useState } from 'react'
export default function Quotation(){
  const [qty,setQty]=useState(100)
  const [price,setPrice]=useState(45)
  const total = qty*price
  return (
    <section className="section max-w-3xl p-4">
      <h1 className="text-3xl font-bold mb-4 text-brand-gray-900">Request a Quotation</h1>
      <p className="text-brand-gray-600 mb-4">Simple estimator (static). Adjust quantity and indicative unit price.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <label className="block">Quantity (pcs)
          <input className="border p-2 w-full" type="number" value={qty} onChange={e=>setQty(+e.target.value)} />
        </label>
        <label className="blocks">Unit price (₹)
          <input className="border p-2 w-full" type="number" value={price} onChange={e=>setPrice(+e.target.value)} />
        </label>
        <div className="p-2 border rounded bg-brand-gray-50">Total: <strong>₹ {total.toLocaleString('en-IN')}</strong></div>
      </div>
      <form className="mt-6 grid gap-3">
        <input className="border p-2" placeholder="Your name" />
        <input className="border p-2" placeholder="Phone / Email" />
        <textarea className="border p-2" placeholder="Project details (dimensions, delivery location)"></textarea>
        <button type="button" className="btn-primary">Submit (placeholder)</button>
      </form>
    </section>
  )
}
