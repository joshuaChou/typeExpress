/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {AuthGuard} from './auth.service';
import {AngularFireModule} from 'angularfire2';
import {DebugElement, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {config} from '../config';
import {APP_BASE_HREF} from '@angular/common';
import {routes} from './app.routes';
import {LoginComponent} from './login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {EmailComponent} from './email/email.component';
import {SignupComponent} from './signup/signup.component';
import {MembersComponent} from './members/members.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailComponent, LoginComponent, SignupComponent, MembersComponent
      ],
      imports: [
        BrowserModule, FormsModule, HttpModule, AngularFireModule.initializeApp(config),
        routes
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        AuthGuard
      ]
    });
  });

  it('should ...', inject([AuthGuard], (service : AuthGuard) => {
    expect(service).toBeTruthy();
  }));

  it('should Active', inject([AuthGuard], (service : AuthGuard) => {
    const check = service
      .canActivate();
     //expect(routerStub.navigate).toHaveBeenCalledWith(['/login']);
  }));

});
