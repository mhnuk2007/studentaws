import React from 'react'

export default function StudentList({ students, onEdit, onDelete, onView, query, setQuery }){
  const filtered = !query ? students : students.filter(s => (s.name||'').toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="card">
      <div className="toolbar" style={{marginBottom:6}}>
        <h2 style={{margin:0}}>Students</h2>
        <span className="spacer"/>
        <input placeholder="Search by name…" value={query} onChange={e=>setQuery(e.target.value)} style={{maxWidth:260}}/>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{width:90}}>ID</th>
            <th>Name</th>
            <th style={{width:120}}>Age</th>
            <th style={{width:220}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan="4" className="muted">No students found.</td></tr>
          ) : filtered.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>
                <button className="ghost" onClick={()=>onEdit(s)}>Edit</button>{' '}
                <button className="secondary" onClick={()=>onView(s)}>View</button>{' '}
                <button className="danger" onClick={()=>onDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
