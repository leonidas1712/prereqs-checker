import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Content, ContentProps, ModDescription } from '../pages/popup/Content';
import { Module } from '@src/common';
import { some,none, Option } from 'fp-ts/lib/Option';
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom';
import Popup from '@src/pages/popup/Popup';
import { beforeFn, someModule } from '../pages/popup/test-utils/test-utils';
import { TOGGLE_MODS_TESTID } from '../pages/popup/Header';
import Mods, { MODS_TESTID } from '../pages/popup/mods/Mods';

beforeFn();

describe("when some module",() => {
    test("that clicking toggle mods button toggles visibility of Mods", async () => {
        console.log("hi");
        const { getByTestId } = render(<Popup module={someModule()}/>)
        
        await userEvent.click(getByTestId(TOGGLE_MODS_TESTID))
        
        // initially not there -> after click is there
        expect(screen.getByTestId(MODS_TESTID)).toBeInTheDocument();

        await userEvent.click(getByTestId(TOGGLE_MODS_TESTID))

        // press again - gone
        expect(screen.queryByTestId(MODS_TESTID)).toBe(null);
    });
});