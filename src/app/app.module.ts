import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {WebsocketService} from './websocket.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ChatComponent} from './chat/chat.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {path: 'chat', component: ChatComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        ChatComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        // RouterModule.forRoot(routes),
        HttpClientModule
    ],
    providers: [WebsocketService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
