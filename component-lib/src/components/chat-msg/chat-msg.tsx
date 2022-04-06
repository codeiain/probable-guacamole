import { Component, h, Prop } from '@stencil/core';
import { timeDifference } from '../../utils/utils';

@Component({
  tag: 'chat-msg',
  styleUrl: 'chat-msg.css',
  shadow: true,
})
export class ChatMsg {

  @Prop() msg: string;
  @Prop() avatar: string;
  @Prop() timestamp: string;
  @Prop() isRemote: boolean;
  @Prop() UserName: string;

  


  render() {
    return 	<article class={"extraSpace " + (this.isRemote ? 'msgFrom' : 'msgYours')}>
      <div class="flr">
        <div class="messages">
          <p class="msg" id="msg-0">
            {this.msg}
          </p>
        </div>
        <span class="timestamp"><span class="username">{this.UserName}</span>&bull;<span class="posttime">{timeDifference(this.timestamp)}</span></span>
      </div>
  </article>
  }

}
