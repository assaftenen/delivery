//angular
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
//ngrx
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
//app
import { environment } from "../../environments/environment";
import { AuthModule } from "./auth/auth.module";
import { AuthInterceptor } from './auth/interceptors';

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
    !environment.production ? StoreDevtoolsModule.instrument({ name: "Get Package" }) : [],
    EffectsModule.forRoot([]),

    // Application modules
    AuthModule,
  ],
  providers: [
    AuthInterceptor
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

