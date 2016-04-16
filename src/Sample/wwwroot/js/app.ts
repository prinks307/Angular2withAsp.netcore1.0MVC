﻿import {Component} from 'angular2/core';
import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { bootstrap} from 'angular2/platform/browser'
@Component({
    selector: 'my-app',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'views/values-index.html'
})


class App {
    public values: any;

    constructor(public http: Http) {
        this.getValues();
    }

    getValues() {
        this.http.get('http://localhost:5000/api/values')
            .map(res => res.json())
            .subscribe(
            data => this.values = data,
            err => this.logError(err),
            () => console.log('Finished retrieving values')
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

bootstrap(App, [HTTP_BINDINGS]);
