import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const onDelete = jest.fn();
const onEdit = jest.fn();
const onToggleCompletion = jest.fn();

const todos = [
  { name: "car", id: 2001, isCompleted: true },
  { name: "bike", id: 2021, isCompleted: true },
];

test("TodosList is rendered and Names column is present", () => {
  render(<TodoList todos={todos} />);
  const Names = screen.getByText(/Names/i);
  expect(Names).toBeInTheDocument();
});

test("Table heading second name test", () => {
  render(<TodoList todos={todos} />);
  const Actions = screen.getByText(/Actions/i);
  expect(Actions).toBeInTheDocument();
});

test("Delete Button  working Test", () => {
  render(
    <TodoList
      onEdit={onEdit}
      onDelete={onDelete}
      onToggleCompletion={onToggleCompletion}
      todos={todos}
    />
  );
  const deleteButton = screen.getByTestId(`delete-button-${todos[0].id}`);
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);
  expect(onDelete).toHaveBeenCalled();
});
