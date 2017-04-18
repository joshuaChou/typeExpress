/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Router} from '@angular/router';
import { routes } from '../app.routes';

import { EmailComponent } from './email.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MembersComponent } from '../members/members.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from '../auth.service';
import { config } from '../../config';
import { APP_BASE_HREF } from '@angular/common';


describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailComponent,
        LoginComponent,
        SignupComponent,
        MembersComponent
        ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AngularFireModule.initializeApp(config),
      routes
    ],
    providers: [ { provide: APP_BASE_HREF, useValue: '/'}],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate', () => {
    fixture.detectChanges();
    const fixtureComponent = TestBed.createComponent(EmailComponent);
    const app = fixtureComponent.debugElement.componentInstance;
     expect(app).toBeTruthy();
  });
});
