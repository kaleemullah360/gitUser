// ====== ./app/components/404/notfound.component.ts ======
import { Component } from '@angular/core';
@Component({
  selector: 'not-found',
  template: `
  <div class="cover">
  <h1>{{title}} <small>Error {{code}}</small></h1>
  <p class="lead">{{message}}</p>
  <p><small>Go to </small> <a href="/" >Home</a></p>
  </div>
`,
  })

export class NotFoundComponent{
  public head:any = `We've got some trouble | {{code}} - {{title}}`;
  public title: string = 'Resource not found';
  public code: string = '404';
  public message: string = 'The requested resource could not be found but may be available again in the future.';
  constructor(){}

}