import { BusStatusPipe } from './bus-status.pipe';

describe('BusStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new BusStatusPipe(null);
    expect(pipe).toBeTruthy();
  });
});
