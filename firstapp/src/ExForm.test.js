import { fireEvent, render, screen } from '@testing-library/react';
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
})
