import { useState } from "react";

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: any) => {
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;