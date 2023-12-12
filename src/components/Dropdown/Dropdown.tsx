import React from 'react'

type DropdownProps = {
    users: Array<string>,
    setSelectedUser: (user: string) => void
}

const DropdownTodo = (props: DropdownProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.setSelectedUser(e.target.value);
  }

  return (
    <div>
      <select onChange={handleChange} data-testid='dropdown'>
        <option value="default" hidden>Select an user</option>
        {props.users.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownTodo