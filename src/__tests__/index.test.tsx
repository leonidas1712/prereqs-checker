import { render, screen } from '@testing-library/react';
import { expect, test, vi, it } from 'vitest';
import { getModuleFromContentResponse } from '../pages/popup/helpers';
import { some, none, match } from 'fp-ts/lib/Option';
import '@testing-library/jest-dom';

import { chrome } from 'jest-chrome'
import { Module } from '@src/common';

// TOOD If possible: implement mocks for chrome and test chrome related fns

describe("[getModuleFromContentResponse] when parsing module from content script response", () => {
    it("parses valid input correctly", () => {
        const valid = "CS2113 Software Engineering & Object-Oriented Programming - NUSMods";
        const res = getModuleFromContentResponse(valid);
        console.log(res);

        match<Module, void>(() => {
            throw new Error("getModuleFromContentResponse failed on valid input");
        }, (module) => {
            expect(module.moduleCode).toBe("CS2113");
            expect(module.title).toBe('Software Engineering & Object-Oriented Programming');
        })(res);
    });

    it("parses invalid input on NUSMods domain correctly (returns none)", () => {
        const invalid = "Courses - NUSMods";
        const res = getModuleFromContentResponse(invalid);
        console.log(res);

        match<Module, void>(() => {
            expect(true).toBe(true);
        }, (_) => {
            throw new Error("getModuleFromContentResponse returned module on invalid input");
        })(res);
    });

    it("parses invalid input NOT on NUSMods domain correctly (returns none)", () => {
        const invalid = "Example | Testing Library";
        const res = getModuleFromContentResponse(invalid);
        console.log(res);

        match<Module, void>(() => {
            expect(true).toBe(true);
        }, (_) => {
            throw new Error("getModuleFromContentResponse returned module on invalid input");
        })(res);
    });
});
