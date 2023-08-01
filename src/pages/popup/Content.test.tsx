import { render, screen, cleanup } from '@testing-library/react';
import { it, expect, test, vi } from 'vitest';
import { Content, ContentProps, ModDescription } from './Content';
import { Module } from '@src/common';
import { some,none, Option } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

class ResizeObserver {
    observe() {
        return;
    }
    unobserve() {
        return;
    }
    
    disconnect() {
        return;
    }
  }

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

    test('that Prereqs does not render when no module', () => {
        const content_props:ContentProps = {
            module:none,
            showMods:false,
            setShowMods:vi.fn()
        };
    
        const { queryByTestId } = render(<Content {...content_props}/>)
        expect(queryByTestId("prereqs")).toBe(null);
    });

    test('that Prereqs renders when some module', () => {
        const content_props:ContentProps = {
            module:someModule(),
            showMods:false,
            setShowMods:vi.fn()
        };
    
        const { getByTestId } = render(<Content {...content_props}/>)
        expect(getByTestId("prereqs")).toBeInTheDocument();
    });

})
