import React from 'react'
import { type TodoId, type Todo } from '../types/Todo'

interface Props extends Todo {
  onRemoveTodo: (id: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export const TodoElement: React.FC<Props> = ({
  id,
  completed,
  title,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id })
        }}
      ></button>
    </div>
  )
}
