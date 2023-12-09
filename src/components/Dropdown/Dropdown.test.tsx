/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const mockUsers = ['User 1', 'User 2', 'User 3'];
  const mockSetSelectedUser = jest.fn();

  it('should render the dropdown with options correctly', () => {
    const { getByTestId, getByText } = render(
      <Dropdown users={mockUsers} setSelectedUser={mockSetSelectedUser} />
    );

    const dropdown = getByTestId('dropdown');
    const dropdownOptions = dropdown.querySelectorAll('option');

    expect(dropdown).toBeInTheDocument();
    expect(dropdownOptions.length).toBe(mockUsers.length + 1); // considering the default option

    mockUsers.forEach((user, index) => {
      if (index === 0) {
        expect(dropdownOptions[index].value).toBe('default');
      }
      else {
        expect(getByText(user)).toBeInTheDocument();
        expect(dropdownOptions[index + 1].value).toBe(user);
      }
    });
  });

  it('should call setSelectedUser when a user is selected', () => {
    const { getByTestId } = render(
      <Dropdown users={mockUsers} setSelectedUser={mockSetSelectedUser} />
    );

    const dropdown = getByTestId('dropdown');
    fireEvent.change(dropdown, { target: { value: mockUsers[1] } });

    expect(mockSetSelectedUser).toHaveBeenCalledWith(mockUsers[1]);
  });
});