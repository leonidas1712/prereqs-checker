// Do what you need to set up your test
import { vi } from 'vitest';
console.log("setup test: jest.setup.js");
global.jest = vi;

Object.assign(global, require('jest-chrome'))

import '@testing-library/jest-dom/extend-expect';



