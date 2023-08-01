import { render, screen, cleanup } from '@testing-library/react';
import { it, expect, test, vi } from 'vitest';
import { Content, ContentProps, ModDescription } from './Content';
import { Module } from '@src/common';
import { some,none, Option } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

import { PREREQS_TESTID } from './prereqs/Prereqs';
import { MODS_TESTID } from './mods/Mods';
import { Header, TOGGLE_MODS_TESTID } from './Header';
import { someModule } from './test-utils/test-utils';
import { ResizeObserver } from './test-utils/test-utils';

beforeAll(() => {
    window.ResizeObserver=ResizeObserver;
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: vi.fn(), // Deprecated
          removeListener: vi.fn(), // Deprecated
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });
});

it('renders toggle button when some module', () => {
    const content_props:ContentProps = {
        module:someModule(),
        showMods:false,
        setShowMods:vi.fn()
    };
    const { getByTestId } = render(<Header {...content_props}/>);
    expect(getByTestId(TOGGLE_MODS_TESTID)).toBeInTheDocument();
});


