import { render, screen,fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

const onAdd = jest.fn();
const onUpdate = jest.fn()

test("Check TODO LIST Heading present in TodoForm" , ()=>{

    render(<TodoForm />)
    const TodoList = screen.getByText(/TODO LIST/)
    expect(TodoList).toBeInTheDocument();
})

test("Add button name present in TodoForm" , ()=>{
    render(<TodoForm />)
    const Add = screen.getByText(/Add/i)
    expect(Add).toBeInTheDocument();
})
test("UpDate button name present in TodoForm" , ()=>{

    render(<TodoForm isEditMode="true"/>)
    const UpDate = screen.getByText(/UpDate/i)
    expect(UpDate).toBeInTheDocument();
})

test ("Add button working Test" , ()=>{
    render(<TodoForm onAdd={onAdd} />)
    const AddTest = screen.getByTestId("AddTest")
    expect(AddTest).toBeInTheDocument();
    fireEvent.click(AddTest);
  expect(onAdd).toHaveBeenCalled();
})

test ("Update button funtionality working Test", ()=>{
    render (<TodoForm isEditMode="true" onUpdate={onUpdate} />)
    const UpDatetedTest = screen.getByTestId("UpdateTest")
    expect(UpDatetedTest).toBeInTheDocument();
    fireEvent.click(UpDatetedTest)
    expect(onUpdate).toHaveBeenCalled()
})

test ("Todo input working Test" , ()=>{
    render(<TodoForm isEditMode="true" onUpdate={onUpdate} />)
})