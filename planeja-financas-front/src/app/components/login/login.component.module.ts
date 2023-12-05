import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [],
  exports:[LoginComponent]
})
export class LoginModule { }