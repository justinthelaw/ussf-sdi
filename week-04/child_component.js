// Write the code that would render a Todo task for "shovel sidewalk" in the TodoList component.

import React from 'react';

const Todo = (props) => (<li>{props.task.name}</li>);

const TodoList = () => {

    let task = {name: "shovel sidewalk"}
    return (
    <ul>
        <Todo task={task} />
    </ul>
    )

}

export default TodoList;