import { newSpecPage } from '@stencil/core/testing';
import { ChatWindow } from '../chat-window';

describe('chat-window', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChatWindow],
      html: `<chat-window></chat-window>`,
    });
    expect(page.root).toEqualHtml(`
      <chat-window>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </chat-window>
    `);
  });
});
