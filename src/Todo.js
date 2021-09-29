import React from 'react';
import './AddATodo.css';
export const Todo = ({todo, onDelete, handleEditClick}) => {
    return (
        <>
        <tr>
            <td>{todo.sno}</td>
            <td>{todo.name}</td>
            <td>{todo.address}</td>
            <td><button className="btn edit-btn" onClick={() => handleEditClick(todo)}>Edit</button></td>
            <td><button className="btn delete-btn" onClick={()=>{onDelete(todo)}}>Delete</button></td>
        </tr>
        </>
    )
}