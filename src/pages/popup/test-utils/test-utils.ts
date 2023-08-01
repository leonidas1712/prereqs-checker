import { some,none, Option } from 'fp-ts/lib/Option';
import { Module } from '@src/common';


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