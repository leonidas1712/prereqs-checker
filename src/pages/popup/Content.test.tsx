import { render, screen, cleanup } from '@testing-library/react';
import { it, expect } from 'vitest';
import { ModDescription } from './Content';
import { Module } from '@src/common';
import { some, Option } from 'fp-ts/lib/Option';
// import 'jest-dom/extend-expect'


function someModule():Option<Module> {
    return some({
        moduleCode: "CS1101S",
        title: "Programming Methodology"
    });
}

it('should show empty mod message when no module', () => {
    const { getByRole } = render(<ModDescription module={someModule()}/>)
    expect(getByRole("heading", { level: 2 })).toHaveTextContent("No module found to check.")
});