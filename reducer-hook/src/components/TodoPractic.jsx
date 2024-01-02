import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  const { type, value } = action;

  switch (type) {
    case "add": {
      const newTodo = {
        id: Date.now(),
        todo: value.todoValue,
        isCompleted: false,
      };
      value.setTodoValue("");
      return {
        todos: [...state.todos, newTodo],
      };
    }

    case "remove": {
      const updatedTodo = state.todos.filter((todo) => todo.id !== value);
      return {
        todos: updatedTodo,
      };
    }

    case "complete": {
      const updatedTodo = state.todo.map((todo) => {
        if (todo.id === value) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });

      return {
        todo: updatedTodo,
      };
    }
    default: {
      return state;
    }
  }
};

export const TodoPractic = () => {
  const [todoValue, setTodoValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    dispatch({
      type: "add",
      value: { todoValue: todoValue, setTodoValue },
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "remove",
      value: id,
    });
  };

  const handleComplete = (id) => {
    dispatch({ type: "remove", value: id });
  };

  return (
    <div>
      <div className="todos">
        <label htmlFor="todo">
          <input
            type="text"
            placeholder="add todo"
            value={todoValue}
            onClick={(e) => setTodoValue(e.target.value)}
          />
        </label>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todoTable">
        {state.todos.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Todos</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {state.todos.map((todo, idx) => (
                <tr key={todo.id}>
                  <td>{idx + 1}</td>
                  <td>{todo.todo}</td>
                  <td
                    onClick={() => {
                      handleComplete(todo.id);
                    }}
                  >
                    {todo.isCompleted ? "completed" : "pending"}
                  </td>
                  <td
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  ></td>
                  <td>❌</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
