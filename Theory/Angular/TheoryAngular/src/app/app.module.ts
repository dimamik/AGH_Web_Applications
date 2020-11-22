import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* To use two-way binding */
import { FormsModule } from "@angular/forms"; 
import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
