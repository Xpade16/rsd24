import AddForm from "./pages/AddForm";
import CheckList from "./pages/CheckList";
import { useSelector } from "react-redux"

export default function App() {
  const list = useSelector(state => state.todo.items);
  return (
    <div role='main'>
      <AddForm />
      <CheckList list={list.filter(item => !item.done)} />
      <CheckList list={list.filter(item => item.done)} done={true} />
    </div>);
}