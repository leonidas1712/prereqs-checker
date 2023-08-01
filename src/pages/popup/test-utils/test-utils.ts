import { some,none, Option } from 'fp-ts/lib/Option';
import { Module } from '@src/common';
import { vi } from 'vitest';
import { ContentProps } from '../Content';

export function someModule():Option<Module> {
    return some({
        moduleCode: "CS1101S",
        title: "Programming Methodology"
    });
}

// Mock ResizeObserver because of ScrollArea
export class ResizeObserver {
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

export const contentPropsSomeModule:ContentProps = {
    module:none,
    showMods:false,
    setShowMods:vi.fn()
};

// Provides mocks for some global objects that are usually irrelevant
export function beforeFn() {
    beforeAll(() => {
        window.ResizeObserver=ResizeObserver;
        // https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: vi.fn(), 
              removeListener: vi.fn(),
              addEventListener: vi.fn(),
              removeEventListener: vi.fn(),
              dispatchEvent: vi.fn(),
            })),
          });
    });
}
