import { start } from './main';

describe('main tests', () => {
  it('should log "Hello World"', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    start();
    expect(consoleSpy).toHaveBeenCalledWith('Hello World');
    consoleSpy.mockRestore();
  });
});
