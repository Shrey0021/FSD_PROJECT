import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handledelete = async (e) => {
        e.preventDefault()
        const id = e.target.id.value
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert('Product deleted successfully')
      }

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handledelete}>
        <input type="text" placeholder="Enter User ID" name="id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default Delete