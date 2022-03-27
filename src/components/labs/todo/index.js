import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
  return(
    <ul>
      {
        todos.map(todo => {
          return(<TodoItem todo={todo}/>);
        })
      }
    </ul>
  );
}
export default TodoList;





//import TodoList from "./TodoList.js";
//
//$('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example</h1>
//        ${TodoList()}
//    </div>
//`);
