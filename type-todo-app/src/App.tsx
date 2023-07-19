/* eslint-disable no-trailing-spaces */
import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoList, type TodoId, type Todo, type TodoTitle } from './types/Todo'
import { type FilterValue, TODO_FILTERS } from './types/Filters'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos: TodoList = [
  {
    id: '1',
    title: 'Crear Landing de Genzai',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con Typescript',
    completed: true
  },
  {
    id: '3',
    title: 'Desplegar la Landing',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<Todo, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    console.log('filter :>> ', filter)
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />

      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
