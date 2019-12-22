import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.less']
})
export class ChatAppComponent implements OnInit {

  content: string;
  talks: Array<Talk> = [];

  constructor(private service: CommonService) { }

  ngOnInit() {
  }

  submitToDoForm(event) {

   this.talks.push(new Talk(this.content, true));
   this.service.callTalkApi(this.content).subscribe(res => {
     this.talks.push( new Talk(res.results[0].reply, false));
    }, error => {
      this.talks.push( new Talk('エラー', false));
    });
   this.content = '';
  }
}

export class Talk {
  private content: string;
  private isOwner: boolean;

  constructor(content, isOwner) {
    this.content = content;
    this.isOwner = isOwner;
  }

  public showContent() {
    return this.content;
  }




}
