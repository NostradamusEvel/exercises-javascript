import { test, expect } from 'hexlet-basics/tests';

test((f) => {
  expect(f('got', 3)).toEqual('got');
  expect(f('got', 2)).toEqual('go');
  expect(f('got', 1)).toEqual('g');
});
