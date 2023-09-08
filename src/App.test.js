import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function add(a,b){
  let add=a+b;
  return add;
}
function sub(a,b){
  let sub=a-b;
  return sub;
}
function mult(a,b){
  let mult=a*b;
  return mult;
}
function div(a,b){
  let div=a/b;
  return div;
}
export default {add,sub,mult,div};