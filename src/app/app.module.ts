import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from "@angular/material";
import { MatListModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatGridListModule } from "@angular/material";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { ChallengeOneComponent } from './component/challenge-one/challenge-one.component';
import { ChallengeTwoComponent } from './component/challenge-two/challenge-two.component';
import { ChallengeThreeComponent } from './component/challenge-three/challenge-three.component';
import { ChallengeFourComponent } from './component/challenge-four/challenge-four.component';

import { NameService } from "./service/name.service";


@NgModule({
  declarations: [
    AppComponent,
    ChallengeOneComponent,
    ChallengeTwoComponent,
    ChallengeThreeComponent,
    ChallengeFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    AngularFontAwesomeModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
