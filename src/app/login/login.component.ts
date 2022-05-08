import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeblogService } from '../weblog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() account: string = "";
  @Input() password: string = "";
  
  constructor(
    private weblogService: WeblogService,
  ) { }

  onSubmit(): void {
    this.weblogService.login(this.account, this.password);
  }

  ngOnInit(): void {
  }

}

// export interface Session {
//   account: string;
//   password: string;
// }