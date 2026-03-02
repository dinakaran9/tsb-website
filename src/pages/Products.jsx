
export default function Products(){
  const items=[
    {name:'Solid Block 400x200x200', spec:'Masonry unit – load bearing'},
    {name:'Solid Block 400x200x150', spec:'Partition / moderate load'},
    {name:'Solid Block 400x200x100', spec:'Partition / light'},
    {name:'Paver 60mm', spec:'Parking areas, pedestrians'},
    {name:'Paver 80mm', spec:'Heavy parking / driveways'},
    {name:'Cement Tile 12x12', spec:'Indoor/outdoor flooring'},
  ]
  return (
    <section className="section p-4">
      <h1 className="text-3xl font-bold mb-4 text-brand-gray-900">Products</h1>
      <table className="w-full border">
        <thead className="bg-brand-gray-50">
          <tr><th className="p-2 border">Product</th><th className="p-2 border">Specification</th></tr>
        </thead>
        <tbody>
          {items.map((it,i)=> (
            <tr key={i} className="odd:bg-white even:bg-brand-gray-50">
              <td className="p-2 border">{it.name}</td>
              <td className="p-2 border text-brand-gray-600">{it.spec}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
