import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState("")
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
        console.log(newTodoValue);
      };

      const onCancel = () => {
        setOpenModal(false);
      };
    
      const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
      };
    
    return(
        <form onSubmit={onSubmit}>
            <label>tu nuevo To Do</label>
            <textarea
                value={newTodoValue} 
                onChange={onChange}
                placeholder="cortar cebolla"    
            />
            <div>
                <button
                    type="button" 
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit" 
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }


