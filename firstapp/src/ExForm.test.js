import { fireEvent, render, screen, act } from '@testing-library/react';
import ExForm from './components/ExForm';

describe("Feedback From", () =>{
  test("Submission disabled if there is no name", () => {
    render(<ExForm/>);
    const nameInput = screen.getByLabelText(/Name:/);
    fireEvent.change(nameInput, {target :{value :""}});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled")
  })

  test("Success submit if there is name and score > 5", () => {
    
    render(<ExForm/>);
    
    global.alert = jest.fn();

    const name = "test";
    const score = "7";

    const nameInput = screen.getByLabelText(/Name:/);
    fireEvent.change(nameInput, {target :{value : name}});

    const scoreInput = screen.getByLabelText(/Score:/);
    fireEvent.change(scoreInput, {target :{value : score}});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Thank you '+name+', you rated '+score+'!!');
  })

  test("Request comment if  score < 5", () => {
    
    render(<ExForm/>);
    
    global.alert = jest.fn();

    const name = "test";
    const score = "3";

    const nameInput = screen.getByLabelText(/Name:/);
    fireEvent.change(nameInput, {target :{value : name}});

    const scoreInput = screen.getByLabelText(/Score:/);
    fireEvent.change(scoreInput, {target :{value : score}});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Please leave a comment explaining your poor experience.');
  })
})
