import { newE2EPage } from '@stencil/core/testing';

describe('chat-msg', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chat-msg></chat-msg>');

    const element = await page.find('chat-msg');
    expect(element).toHaveClass('hydrated');
  });
});
