
import { useState } from 'react'
export default function Admin(){
  const [email,setEmail]=useState('')
  const [pwd,setPwd]=useState('')
  const login = () => alert('This is a static placeholder. Backend auth will be added later. only for admin use')
  return (
    <section className="section max-w-3xl p-4">
      <h1 className="text-3xl font-bold mb-4 text-brand-gray-900">Admin Login</h1>
      <div className="grid gap-3">
        <input className="border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2" type="password" placeholder="Password" value={pwd} onChange={e=>setPwd(e.target.value)} />
        <button onClick={login} className="btn-primary">Sign in</button>
        <p className="text-xs text-brand-gray-500">Note: this page is non-functional on the static site; will connect to backend in next phase.</p>
      </div>
    </section>
  )
}
