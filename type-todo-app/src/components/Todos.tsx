/* eslint-disable no-trailing-spaces */
import { type Todo, type TodoId, type TodoList } from '../types/Todo'
import { TodoElement } from './TodoElement'

interface Props {
  todos: TodoList
  onRemoveTodo: (id: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <TodoElement
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}
