import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { IpcRendererService } from '../shared/service/ipcRenderer/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent  {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private ipc: IpcRendererService,
  ) {
  }

  login(name: string, pw: string) {
    this.ipc.dialog('isMessage');
    console.log('zzz111');
    this.loginService.login({
      name: name,
      pw: pw,
    })
    .subscribe(next => this.router.navigate(['/main']));
  }
}
