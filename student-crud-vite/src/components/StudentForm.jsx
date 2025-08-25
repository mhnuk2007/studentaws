import React, { useEffect, useState } from 'react'

export default function StudentForm({ onSave, editing }){
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    if(editing){
      setName(editing.name ?? '')
      setAge(editing.age ?? '')
      setStatus('Editing student #' + editing.id)
    } else {
      setName('')
      setAge('')
      setStatus('')
    }
  }, [editing])

  async function handleSubmit(e){
    e.preventDefault()
    if(!name.trim()) return setStatus('Name is required.')
    const nAge = Number(age)
    if(!nAge || nAge < 1) return setStatus('Age must be a positive number.')
    setStatus('Saving…')
    try{
      await onSave({ name: name.trim(), age: nAge, id: editing?.id })
      setStatus(editing ? 'Updated.' : 'Created.')
      if(!editing){ setName(''); setAge('') }
    }catch(err){
      setStatus('Save failed: ' + (err?.message || err))
    }
  }

  return (
    <div className="card">
      <h2 style={{margin:0, marginBottom:8}}>Add / Edit Student</h2>

      <form onSubmit={handleSubmit} className="row">
        <div>

          <label htmlFor="name">Name</label>

          <input id="name" value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., Alice"/>

        </div>

        <div>

          <label htmlFor="age">Age</label>

          <input id="age" type="number" min="1" value={age} onChange={e=>setAge(e.target.value)} placeholder="e.g., 22"/>

        </div>

        <div className="toolbar" style={{marginTop:12}}>

          <button type="submit">Save</button>

          <button type="button" className="secondary" onClick={()=>{ setName(''); setAge(''); }}>Reset</button>

          {editing && <span className="pill">Editing ID: {editing.id}</span>}

        </div>

      </form>

      {status && <div className="status">{status}</div>}

    </div>

  )

}

