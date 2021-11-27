import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const setup = () => {
  const app = render(<App />)

  const appName = app.getAllByText("Weather Grabber", { exact: false })[0];
  const homeLink = app.getByText("Home", { exact: true });
  const appLink = app.getByText("App", { exact: true });
  const githubLink = app.getByText("Github repository", { exact: true })

  return {
    appName,
    homeLink,
    appLink,
    githubLink
  }
}

describe('Weather grabber web-application is being rendered correctly', () => {

  test('Home page is rendered properly', async () => {
    const { homeLink, appLink, appName } = setup();
    expect(appName).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(appLink).toBeInTheDocument();
  })

  test('Clicking the "App" navlink brings the user to the app page', async () => {
    const { appLink, homeLink } = setup();
    await userEvent.click(appLink);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Zip Code')).toBeInTheDocument();
    await userEvent.click(homeLink);
  })

  test('Github repo link exists on the Home page', async () => {
    const { githubLink } = setup();

    expect(githubLink).toBeInTheDocument();
  })

})