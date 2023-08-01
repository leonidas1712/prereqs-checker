import { render } from '@testing-library/react';
import { it, expect, test, vi } from 'vitest';
import { ContentProps } from './Content';
import { none } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

import { MODS_TESTID } from './mods/Mods';
import { Header, TOGGLE_MODS_TESTID } from './Header';
import { someModule } from './test-utils/test-utils';
import { ResizeObserver } from './test-utils/test-utils';

beforeAll(() => {
    window.ResizeObserver=ResizeObserver;
    // https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
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

describe('when some module', () => {
    const content_props:ContentProps = {
        module:someModule(),
        showMods:false,
        setShowMods:vi.fn()
    };

    it("renders toggle mods button", () => {
        const { getByTestId } = render(<Header {...content_props}/>);
        expect(getByTestId(TOGGLE_MODS_TESTID)).toBeInTheDocument();
    })
});

test("that toggle mods button is not visible when no module", () => {
    const content_props:ContentProps = {
        module:none,
        showMods:false,
        setShowMods:vi.fn()
    };

    const { queryByTestId } = render(<Header {...content_props}/>);
    expect(queryByTestId(TOGGLE_MODS_TESTID)).toBe(null);
});


