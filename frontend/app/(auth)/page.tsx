 
// import LoginForm from './_components/LoginForm'
import { getTodos } from '@/lib/api/todos';

type Props = {}

export default async function page({ }: Props) {
  const todos = await getTodos();

  return (
    <div>
 
      <ul className="space-y-2">
        {todos.slice(0, 10).map(todo => (
          <li
            key={todo.id}
            className="border p-3 rounded flex justify-between"
          >
            <span>{todo.title}</span>
            <span>{todo.completed ? '✅' : '❌'}</span>
          </li>
        ))}
      </ul>


    </div>
  )
}