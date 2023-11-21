import React from 'react'

type Props = {
  items: Todo[],
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TodoList = ({items, onClick}: Props) => {
  return (
    <div>
      {items && items.map((item) => (
        <div key={item.id}>
          <p>{item.value}</p>
        </div>
      ))}
      <div>
        <input type='text' name='item' />
        <button type='submit' value='Add' onClick={onClick} />
      </div>
    </div>
  )
}

export default TodoList