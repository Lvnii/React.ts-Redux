import { useState } from "react";
import { addTodo } from "../../../Store/Todo/Todo.slice";

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo({id: 0, text: inputValue})
        console.log(e)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleChange}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;