// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//app
import { HttpClientModule } from '@angular/common/http';
//ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { AuthEffects } from './store/effects';
import { AuthFacade } from './store/auth.facade';
import { authReducer, AUTH_FEATURE_KEY } from './store/reducers';
import { SharedModule } from '../shared/shared.module';
import { NoAuthGuardService } from './guards';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuardService],
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [ AuthFacade, AuthService],
  exports: [
    LoginComponent
  ],
})
export class AuthModule { }
