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
      const updatedTodo = state.todos.map((todo) => {
        if (todo.id === value) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });

      return {
        todos: updatedTodo,
      };
    }

    default: {
      return state;
    }
  }
};

export const Todos = () => {
  const [todoValue, setTodoValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  //   doubt

  const handleAddTodo = () => {
    dispatch({
      type: "add",
      value: { todoValue: todoValue, setTodoValue: setTodoValue },
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: "remove", value: id });
  };

  const handleComplete = (id) => {
    dispatch({ type: "complete", value: id });
  };

  return (
    <div>
      <div className="todos">
        <label htmlFor="todo">
          <input
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            placeholder="add todo"
          />
        </label>
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="todosTable">
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
                  >
                    ❌
                  </td>
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
