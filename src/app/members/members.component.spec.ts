/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Router} from '@angular/router';
import { routes } from '../app.routes';

import { EmailComponent } from '../email/email.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MembersComponent } from './members.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from '../auth.service';
import { config } from '../../config';
import { APP_BASE_HREF } from '@angular/common';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

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
    providers: [ { provide: APP_BASE_HREF, useValue: '/'}, AuthGuard],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixtureComponent = TestBed.createComponent(MembersComponent);
    const app = fixtureComponent.debugElement.componentInstance;
     expect(app).toBeTruthy();
  });
});
