import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greeter from '../components/Greeter'

test('the button causes the correct greeting to display', () => {
  const greeterWrapper = render(<Greeter />);
  userEvent.click(greeterWrapper.getByText('English'));

  expect(screen.getByText('Hello', { exact: false })).toBeInTheDocument(); //fail but answer
  // greeterWrapper.getById(<LocalizedGreeting />).toEqual(true); //fail
  // greeterWrapper.render(LocalizedGreeting).toExist(); //fail
  // greeterWrapper.hasChildren().toEqual(true); //fail
  // expect(wrapper.div(LocalizedGreeting)).toHaveLength(1); //fail
  // expect(greeterWrapper.find(LocalizedGreeting)).toHaveLength(1); //fail
})