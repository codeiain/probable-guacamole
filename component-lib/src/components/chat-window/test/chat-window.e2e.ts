import { newE2EPage } from '@stencil/core/testing';

describe('chat-window', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chat-window></chat-window>');

    const element = await page.find('chat-window');
    expect(element).toHaveClass('hydrated');
  });
});
