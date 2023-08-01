import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { Content, ContentProps, ModDescription } from './Content';
import { Module } from '@src/common';
import { some,none, Option } from 'fp-ts/lib/Option';
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom';
import Popup from './Popup';
import { beforeFn, someModule } from './test-utils/test-utils';

beforeFn();

describe("when some module", () => {
    test("that clicking toggle mods button toggles visibility of Mods", () => {
        console.log("hi");
        render(<Popup module={someModule()}/>)

    });
});