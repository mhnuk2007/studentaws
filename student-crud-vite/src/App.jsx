import React, { useEffect, useState } from 'react'
import StudentForm from './components/StudentForm.jsx'
import StudentList from './components/StudentList.jsx'
import api, { refreshApiBase } from './api.js'

export default function App(){
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [editing, setEditing] = useState(null)
  const [query, setQuery] = useState('')

  async function load(){
    setLoading(true)
    setStatus('Loading…')
    try{
      const res = await api.get('/students')
      console.log('fetching')
      setStudents(res.data)
      setStatus(`Loaded ${res.data.length} students.`)
    }catch(err){
            console.log('fetching failed')

      setStatus('Failed to load: ' + (err?.message || err))
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function saveStudent(payload){
    if(payload.id == null){
      const res = await api.post('/students', { name: payload.name, age: payload.age })
      setStudents(prev => [...prev, res.data])
      setEditing(null)
    } else {
      const res = await api.put(`/students/${payload.id}`, { name: payload.name, age: payload.age })
      setStudents(prev => prev.map(s => s.id === payload.id ? res.data : s))
      setEditing(null)
    }
  }

  async function deleteStudent(id){
    if(!confirm('Delete student #' + id + '?')) return
    await api.delete(`/students/${id}`)
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  function viewStudent(s){
    alert(`ID: ${s.id}\nName: ${s.name}\nAge: ${s.age}`)
  }

  return (
    <>
      <header>
        <h1>Student Manager</h1>
        <div className="sub">React + Vite frontend for your Spring Boot REST API</div>
      </header>
      <div className="container">
        <StudentForm onSave={saveStudent} editing={editing} />
        <div className="card">
          <div className="toolbar">
            <button className="ghost" onClick={load} disabled={loading}>↻ Refresh</button>
            <span className="spacer"/>
            <span className="status">{status}</span>
          </div>
        </div>
        <StudentList
          students={students}
          onEdit={setEditing}
          onDelete={deleteStudent}
          onView={viewStudent}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <footer style={{textAlign:'center', padding:22, color:'#6b7280'}}>
        Built with React + Vite • CRUD demo
      </footer>
    </>
  )
}
