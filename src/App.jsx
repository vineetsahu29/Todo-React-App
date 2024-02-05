
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todoMsg) => {
    setTodos((prev) => [{ id: Date.now(), ...todoMsg }, ...prev])
  }

  const updateTodo = (id, todoMsg) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todoMsg : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todoMsg) => todoMsg.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
