import { authInterceptorProviders } from './auth/interceptors/index';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { NgModule, Optional, SkipSelf } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "../../environments/environment";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    // NgRx
    StoreModule.forRoot({}, {runtimeChecks:{
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictActionSerializability: true,
      strictStateSerializability: true,
    } },),
    !environment.production ? StoreDevtoolsModule.instrument({ name: "Get Delivery" }) : [],
    EffectsModule.forRoot([]),

    // Application modules
    AuthModule,
  ],
  providers: [
    ...authInterceptorProviders,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "The CoreModule is already loaded. Import only once at the app module"
      );
    }
  }
}

