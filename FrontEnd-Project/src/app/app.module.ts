import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignUpService } from './services/signup.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChartsModule } from 'ng2-charts';
import { RepositoriesComponent } from './repositories/repositories.component';
import { MatSidenavModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import {
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { ModelUploadComponent } from './model-upload/model-upload.component';
import { FileSelectDirective } from 'ng2-file-upload';
import {SharedServiceService} from './services/shared-service.service';
import {PostsComponent} from './posts/posts.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    UserProfileComponent,
    RepositoriesComponent,
    ModelUploadComponent,
    FileSelectDirective, PostsComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    PostEditComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    MatSidenavModule,
    MatButtonModule, MatButtonToggleModule, MatListModule , MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [SignUpService, SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
