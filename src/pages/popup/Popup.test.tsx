import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Content, ContentProps, ModDescription } from './Content';
import { Module } from '@src/common';
import { some,none, Option } from 'fp-ts/lib/Option';
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom';
import Popup from './Popup';
import { beforeFn, someModule } from './test-utils/test-utils';
import { TOGGLE_MODS_TESTID } from './Header';
import Mods, { MODS_TESTID } from './mods/Mods';

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