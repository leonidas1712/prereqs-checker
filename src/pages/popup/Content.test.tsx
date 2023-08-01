import { render, screen, cleanup } from '@testing-library/react';
import { it, expect } from 'vitest';
import { ModDescription, ModTest } from './Content';

it('should show empty mod message when no module', () => {
    render(<ModTest />)
});