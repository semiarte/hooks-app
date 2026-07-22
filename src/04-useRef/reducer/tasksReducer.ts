interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// state to return
interface TaskState {
    todos: Todo[];
    lenght: number;
    completed: number;
    pending: number;
}

// Actions to update state
export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number };

// Initial state
export const getTaskInitialState = (): TaskState => {
    return {
        todos: [],
        completed: 0,
        pending: 0,
        lenght: 0,
    };
};

// returns always an state (never null)
export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                lenght: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }

        case "DELETE_TODO":
            {
                const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);
                return {
                    ...state,
                    todos: currentTodos,
                    lenght: currentTodos.length,
                    completed: currentTodos.filter((todo) => todo.completed).length,
                    pending: currentTodos.filter((todo) => !todo.completed).length,
                };
            }

        case "TOGGLE_TODO":
            {
                const updatedTodos = state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                });
                return {
                    ...state,
                    todos: updatedTodos,
                    completed: updatedTodos.filter((todo) => todo.completed).length,
                    pending: updatedTodos.filter((todo) => !todo.completed).length,
                };
            }

        default:
            return state;
    }
}