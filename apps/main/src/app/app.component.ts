import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@real-world-full-stack-example/api-interfaces';

@Component({
  selector: 'real-world-full-stack-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
