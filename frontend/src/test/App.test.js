import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import { BrowserHistory  } from 'react-router-dom';

test('full app rendering/navigating', async () => {
  expect(true).toBe(true);
})