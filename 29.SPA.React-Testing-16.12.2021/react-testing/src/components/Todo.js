import React from 'react'

function Todo({todo}) {
    const { id , title , done } = todo
   console.log(todo);
    return (
        <div data-testid="todo">
            {title}
        </div>
    )
}

export default Todo
