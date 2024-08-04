import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (todo: any) => {
    await client.removeTodo(todo);
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
  };

  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };

  const postTodo = async () => {
    const newTodo = await client.postTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      const updatedTodos = todos.map((t) =>
        t.id === todo.id
          ? { ...todo, ...(todo.editing && { editing: false }) }
          : t
      );
      setTodos(updatedTodos);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />{" "}
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {todo.editing ? (
              <input
                type="text"
                className="form-control w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...todo, title: e.target.value } : t
                    )
                  )
                }
                onBlur={() => updateTodo({ ...todo, editing: false })}
              />
            ) : (
              <span
                onClick={() => editTodo(todo)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            )}
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1 ms-2"
              id="wd-remove-todo"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end ms-2 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end ms-2 mt-1"
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
