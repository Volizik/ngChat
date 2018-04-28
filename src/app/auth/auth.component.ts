import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    name;
    password;

    constructor() {
    }

    ngOnInit() {
    }

    registr() {
        const form = {
            'name': this.name,
            'password': this.password
        };
        console.log(form);
    }

    enter() {
        const form = {
            'name': this.name,
            'password': this.password
        };
        console.log(form);
    }
}
