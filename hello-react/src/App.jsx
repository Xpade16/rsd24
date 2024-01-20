import AddForm from "./pages/AddForm";
import CheckList from "./pages/CheckList";

export default function App({list, add, remove, toggle}) {
  
  return (
    <div role='main'>
      <AddForm add={add} />
      <CheckList list={list.filter(item => !item.done)} toggle={toggle} remove={remove} />
      <CheckList list={list.filter(item => item.done)} toggle={toggle} remove={remove} done={true} />
    </div>);
}