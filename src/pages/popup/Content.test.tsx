import { render, screen, cleanup } from '@testing-library/react';
import { it, expect, test, vi } from 'vitest';
import { Content, ContentProps, ModDescription } from './Content';
import { Module } from '@src/common';
import { some,none, Option } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

import { PREREQS_TESTID } from './prereqs/Prereqs';
import { MODS_TESTID } from './mods/Mods';
import { TOGGLE_MODS_TESTID } from './Header';

import { ResizeObserver } from './test-utils/test-utils';

function someModule():Option<Module> {
    return some({
        moduleCode: "CS1101S",
        title: "Programming Methodology"
    });
}

test('if ModDescription shows empty mod message when no module', () => {
    const { getByRole } = render(<ModDescription module={none}/>)
    expect(getByRole("heading", { level: 4 })).toHaveTextContent("No module found to check");
    expect(getByRole("link")).toHaveTextContent("NUSMods");
});

test('if ModDescription shows module code when some module', () => {
    const { getByRole } = render(<ModDescription module={someModule()}/>)
    expect(getByRole("heading", { level: 2 })).toHaveTextContent("CS1101S");
});

describe("test Content", () => {
    beforeAll(() => {
        window.ResizeObserver=ResizeObserver;
    });

    const content_props:ContentProps = {
        module:none,
        showMods:false,
        setShowMods:vi.fn()
    };

    describe("when no module", () => {
        test('that Prereqs does not render', () => {
            const { queryByTestId } = render(<Content {...content_props}/>)
            expect(queryByTestId(PREREQS_TESTID)).toBe(null);
        });

        test('that Mods does render', () => {
            const { getByTestId } = render(<Content {...content_props}/>)
            expect(getByTestId(MODS_TESTID)).toBeInTheDocument();
        });
    })

    describe("when some module", () => {
        const content_props:ContentProps = {
            module:someModule(),
            showMods:false,
            setShowMods:vi.fn()
        };

        test('that module code is visible', () => {
            const { getByRole } = render(<Content {...content_props}/>);
            expect(getByRole("heading", { level: 2 })).toHaveTextContent("CS1101S");
        });

        test('that Prereqs renders', () => {
            const { getByTestId } = render(<Content {...content_props}/>)
            expect(getByTestId(PREREQS_TESTID)).toBeInTheDocument();
        });
    });
})
