import {Todo} from './Todo';
import "./AddATodo.css";
export const TodoList = (props) => {
    const mainContainer={
        marginBottom:'50px',
    }
    return (
        <div style={mainContainer}>
            <h3 className="h3">Todos List</h3>
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {props.todos.length === 0 ? "No Todos List Here" :
            props.todos.map((todo,i)=>{
                return <Todo todo={todo} key={todo.sno || i} onDelete={props.onDelete} handleEditClick={props.handleEditClick} />
                }
            )} 
            </tbody>
        </table>  
        </div>
    )
}
