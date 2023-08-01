import { render } from '@testing-library/react';
import { it, expect, test, vi } from 'vitest';
import { ContentProps } from '../pages/popup/Content';
import { none } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

import { MODS_TESTID } from '../pages/popup/mods/Mods';
import { Header, TOGGLE_MODS_TESTID } from '../pages/popup/Header';
import { beforeFn, someModule } from '../pages/popup/test-utils/test-utils';
import { MockResizeObserver } from '../pages/popup/test-utils/test-utils';

beforeFn();

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


