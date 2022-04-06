import { Component, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'chat-window',
  styleUrl: 'chat-window.css',
  shadow: true,
})
export class ChatWindow {

  @State() value: string;
  @Event() newMsgSubmitted: EventEmitter<String>;

  newMsgSubmittedHandler(e) {
    this.newMsgSubmitted.emit(e);
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    this.newMsgSubmittedHandler(this.value);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <section class="chatbox">
        <section class="chat-window">
            <slot></slot>
      </section>
        <form class="chat-input" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" autocomplete="on" placeholder="Type a message" value={this.value} onInput={(event) => this.handleChange(event)} />
          <input type="submit" value=""/>
        </form>
      </section>
    );
  }

}
