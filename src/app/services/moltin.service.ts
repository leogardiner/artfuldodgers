import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
var moltinFramework = require('./../js/moltin.min.js');

@Injectable()

export class MoltinService {
    isLoaded: boolean;
    moltin;

    constructor(private http: Http){}
    
    authenticate() {
        return new Promise((resolve, reject) => {
            this.moltin = new moltinFramework.Moltin({publicId: 'AsNOGOBXgSb5TaLugdXB3iIHLnqTrTyUXn8sAt9XWN'});
            this.moltin.Authenticate(function(json) {
                resolve(json);
            })
        });
    }
    
    getPosts() {
        // WAIT FOR AUTHENTICATE
        return new Promise((resolve, reject) => {
            this.authenticate().then(() => {
                this.moltin.Product.List(null, function(a) {
                    resolve(a);
                })
            })
        })
    }
}