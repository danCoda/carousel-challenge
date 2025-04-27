import '@testing-library/jest-dom';
import 'jest-styled-components';

// Add TextEncoder polyfill for tests
const util = require('util');
global.TextEncoder = util.TextEncoder;
global.TextDecoder = util.TextDecoder;

// Mock fetch for tests
global.fetch = jest.fn();