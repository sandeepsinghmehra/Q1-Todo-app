import React, {useState} from 'react';
import './AddATodo.css';

export const AddATodo = ({setTodos, addTodo, todos, isEditing, setIsEditing, currentTodo, setCurrentTodo }) => {
    const [stateForm, setStateForm] = useState({
        name: '',
        address: ''
    });
    const SubmitForm = (e) => {
        e.preventDefault();
        if(!stateForm.name || !stateForm.address){
            alert('Name or Address cannot be blank.');
        }
        else{ 
           let sno;
           if(todos.length===0){
               sno=0;
           }else{
               sno = todos[todos.length-1].sno +1;
           }
        
           addTodo({
               sno:sno, 
               name:stateForm.name, 
               address:stateForm.address
           });
        }
        setStateForm({
            name: '',
            address: '',
        });
    }
    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        handleUpdateTodo(currentTodo.sno, currentTodo)
      }
    const handleEditInputChange = (e) => {
        setCurrentTodo({
            ...currentTodo, 
            [e.target.name]: e.target.value
        });
      }
    const handleUpdateTodo = (sno, updatedTodo) => {
        setIsEditing(false);
        setTodos(todos.map((todo) => {
            if(todo.sno === sno){
                return ({ sno: sno, name: updatedTodo.name, address: updatedTodo.address});
            }
            return todo;
        }));
      }
    
    const UpdateChanges = (e) => {
        setStateForm({
            ...stateForm,
            [e.target.name] : e.target.value
        })
    }
 
    return (
        <div className="main">
            {!isEditing ? (
                <div className="card">
                    <form onSubmit={SubmitForm}>
                        <h3 className="h3 c-white">Todos</h3>
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={stateForm.name}
                            onChange={UpdateChanges}
                            placeholder="write a name"
                        />
                        <br />
                        <label>Address</label>
                        <input  
                            type="text"
                            name="address"
                            value={stateForm.address}
                            onChange={UpdateChanges}
                            placeholder="write address"
                        />
                        <br />
                        <button type="submit" className="btn add-btn">Add your Todo</button>
                    </form>
                    </div>) : (
                    <div className="card">
                        <form onSubmit={handleEditFormSubmit}>
                            <h3 className="h3 c-white">Edit Todo</h3>
                            <label htmlFor="editTodo">Name </label>
                            <input 
                                name="name"
                                type="text"
                                value={currentTodo.name}
                                onChange={handleEditInputChange}
                                placeholder="write a name"
                            />
                            <br />
                            <label>Address</label>
                            <input  
                                type="text"
                                name="address"
                                value={currentTodo.address}
                                onChange={handleEditInputChange}
                                placeholder="write Address"
                            />
                            <br />
                            <button type="submit" className="btn edit-btn">Update</button>
                            <button className="btn cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                        </form>
                    </div>
            )}
        </div>
    )
}
