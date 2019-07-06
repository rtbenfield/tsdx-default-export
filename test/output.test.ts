import sum from '../dist';

console.log(
  'notice that sum has a default field containing the function:',
  sum
);

describe('test build output', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
