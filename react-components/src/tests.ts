import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// https://github.com/reduxjs/redux-toolkit/issues/3254#issuecomment-1465193490
import nodeFetch, { Request, Response } from 'node-fetch';
/* eslint-disable @typescript-eslint/ban-ts-comment */
global.fetch = nodeFetch;
global.Request = Request;
global.Response = Response;
/* eslint-enable @typescript-eslint/ban-ts-comment */

expect.extend(matchers);
