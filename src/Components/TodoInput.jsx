import React from 'react';

export default function TodoInput(props) {
    const { handleAddTodos, setTodoValue, todoValue } = props;

    return (
        <header>
            <input
                type="text"
                placeholder="Enter a to-do..."
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
            />
            <button
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue(''); // Clear input after adding
                }}
            >
                Add
            </button>
        </header>
    );
}
