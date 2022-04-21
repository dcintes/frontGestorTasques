import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsArray } from './app.effects';
import { appReducers } from './app.reducer';
import { AuthModule } from './auth/auth.module';
import { GroupModule } from './group/group.module';
import { RewardModule } from './reward/reward.module';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { TaskModule } from './task/task.module';
import { TemplateRewardModule } from './template-reward/template-reward.module';
import { TemplateTaskModule } from './template-task/template-task.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    AuthModule,
    UserModule,
    GroupModule,
    TaskModule,
    RewardModule,
    TemplateTaskModule,
    TemplateRewardModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
