import { render, screen } from '@testing-library/react';
import { expect, test, vi, it } from 'vitest';
import { getModuleFromContentResponse } from './helpers';
import { some, none, match } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

import { chrome } from 'jest-chrome'
import { Module } from '@src/common';

describe("parsing of module from content script response", () => {
    it("parses valid response correctly", () => {
        console.log("Hello");
        const valid = "CS2113 Software Engineering & Object-Oriented Programming - NUSMods";
        const res = getModuleFromContentResponse(valid);
        console.log(res);

        match<Module, void>(() => {
            throw new Error("getModuleFromContentResponse failed on valid input");
        }, (module) => {
            expect(module.moduleCode).toBe("CS2113");
            expect(module.title).toBe('Software Engineering & Object-Oriented Programming');
        });
        
    });
});

test("mock chrome", () => {
    expect(true).toBe(true);
});