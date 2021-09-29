import React, {useState} from 'react'

export const EditTodo = ({todo}) => {
    const [state, setState] = useState({
        name: todo.name,
        address: todo.address,
    });
  
    const UpdateChanges = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            
             <form onSubmit={SubmitForm}>
                <label>Name : </label>
                <input 
                    type="text"
                    name="name"
                    value={stateForm.name}
                    onChange={UpdateChanges}
                    placeholder="write a name"
                />
                <br />
                <label>Address : </label>
                <input  
                    type="text"
                    name="address"
                    value={stateForm.address}
                    onChange={UpdateChanges}
                    placeholder="write Address"
                />
                <br />
                <input 
                    type="submit"
                    value="Edit your Todo"
                />
            </form>
        </div>
    )
}
