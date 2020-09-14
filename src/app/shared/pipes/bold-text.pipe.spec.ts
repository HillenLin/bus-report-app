import { BoldTextPipe } from './bold-text.pipe';

describe('BoldTextPipe', () => {

  it('create an instance', () => {
    const pipe = new BoldTextPipe(null);
    expect(pipe).toBeTruthy();
  });
});
