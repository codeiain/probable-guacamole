import { newSpecPage } from '@stencil/core/testing';
import { ChatMsg } from '../chat-msg';

describe('chat-msg', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChatMsg],
      html: `<chat-msg></chat-msg>`,
    });
    expect(page.root).toEqualHtml(`
      <chat-msg>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </chat-msg>
    `);
  });
});
