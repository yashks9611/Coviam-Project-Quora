import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileEditComponent  } from './pages/profile-edit/profile-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent} from './pages/contact/contact.component';
import { FeedComponent} from './pages/feed/feed.component';
import { SearchComponent} from './pages/search/search.component';
import { QuestionViewComponent } from './pages/question-view/question-view.component';
import { AskQuestionComponent } from "./pages/ask-question/ask-question.component";
import { NotifsComponent } from "./pages/notifs/notifs.component";

const routes: Routes =[
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'element',          component: ComponentsComponent },
    { path: 'profile',          component: ProfileComponent },
    { path: 'profileEdit',      component: ProfileEditComponent },
    { path: 'signin',           component: SigninComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'documentation',    component: LandingComponent },
    { path: 'homepage',         component: HomepageComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'feed',             component: FeedComponent },
    { path: 'search',           component: SearchComponent },
    { path: 'question',         component: QuestionViewComponent },
    { path: 'askQuestion',      component: AskQuestionComponent },
    { path: 'notifs',           component: NotifsComponent }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
