import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './users/user-container.component';
import { FormsModule} from '@angular/forms'
import { UsersModule } from './users/users.module';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent
  ],
  imports: [
    BrowserModule, FormsModule, UsersModule, HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
