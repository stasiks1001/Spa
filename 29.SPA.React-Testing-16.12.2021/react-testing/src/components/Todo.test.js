import { render , screen , fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('should render Todo component', () => {
    const data = { id :5 , title :'learn php' , done:true}
    render( <Todo todo ={data} /> );
    // finding element in Todo component
    // const todoElelment = screen.getByTestId('todo');
    // expect(todoElelment).toBeInTheDocument();
    // expect(todoElelment).toHaveTextContent('hello world');
})
