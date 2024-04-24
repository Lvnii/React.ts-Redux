import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Todo = {
    id: number,
    text: string,
}

type TodoState = {
    data: Todo[];
}

const initialState: TodoState = {
    data: []
}

const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            console.log(action.payload)
            state.data.push()
        }
    },
})

export default TodoSlice.reducer;