import { useState } from 'react'

export default function ItemForm({ item, onSave, onCancel }) {
  const [name, setName] = useState(item ? item.name : '')
  const [email, setEmail] = useState(item ? item.email : '')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ name, email })
    if (!item) {
      setName('')
      setEmail('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {' '}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{item ? 'Update' : 'Add'}</button>
      {onCancel && (
        <>
          {' '}
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </>
      )}
    </form>
  )
}