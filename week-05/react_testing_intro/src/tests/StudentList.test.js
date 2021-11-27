import { render, screen, waitFor } from '@testing-library/react';
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import StudentList from '../components/StudentList'

const studentDatabase = setupServer(
  rest.get('/api/students', (request, response, context) => {
    return response(
      context.json([
        { firstName: "George", lastName: "Washington", homeroom: "A" },
        { firstName: "Matthew", lastName: "Damon", homeroom: "B" },
        { firstName: "Mariah", lastName: "Carey", homeroom: "C" }
      ]),
      context.status(200)
    )
  })
)
beforeAll(() => studentDatabase.listen());
afterEach(() => studentDatabase.resetHandlers());
afterAll(() => studentDatabase.close());

test('Displays the api response as intended by the StudentList component', async () => {
  render(<StudentList />)
  await waitFor(() => {
    expect(screen.getByText('George Washington', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Matthew Damon', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Mariah Carey', { exact: false })).toBeInTheDocument();
    // expect(screen.getByText('NOT A REAL NAME', { exact: false })).toBeInTheDocument(); //should fail
  })
});
