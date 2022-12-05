import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//    const linkElement = screen.getByText('learn testing');
//    expect(linkElement).toBeInTheDocument();
// });


// test(' description ', ()=>{
//    expect(true).toBe(true);


// });

 test('should render App component ', () => {
   render(<App />);
   // find heading element with content
   const heading = screen.getByRole('heading',{name:'this is Testing example'});
   expect(heading).toBeInTheDocument();
   const pragraphElement = screen.getByTestId('main-p');
   expect(pragraphElement).toBeInTheDocument();
   expect(pragraphElement).toHaveTextContent('this is');
   expect(pragraphElement).toHaveStyle({color:'blue'});
  
   // finding the button
   const buttonElement = screen.getByTestId('color-btn');
   expect(buttonElement.textContent).toBe(' lightgreen ');
   fireEvent.dblClick(buttonElement)

 });
 
 test('should ', () => {
   
 })
 