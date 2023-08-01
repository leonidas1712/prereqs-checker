// Do what you need to set up your test
console.log("setup test: jest.setup.js");
Object.assign(global, require('jest-chrome'))

import '@testing-library/jest-dom/extend-expect';



