import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SearchComponent } from './search/search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ContactComponent } from './contact/contact.component';
import { FeedComponent } from './feed/feed.component';
import { QuestionViewComponent } from "./question-view/question-view.component";
import { AskQuestionComponent } from "./ask-question/ask-question.component";
import { NotifsComponent } from "./notifs/notifs.component";
import { UploadBackgroundImageComponent } from "./upload-background-image/upload-background-image.component";
import { UploadImageComponent } from "./upload-image/upload-image.component";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        SigninComponent,
        ProfileComponent,
        ProfileEditComponent,
        ContactComponent,
        SearchComponent,
        FeedComponent,
        QuestionViewComponent,
        AskQuestionComponent,
        NotifsComponent,
        UploadBackgroundImageComponent,
        UploadImageComponent
    ],
    entryComponents: [],
    exports:[ RouterModule ]
})
export class PagesModule { }
