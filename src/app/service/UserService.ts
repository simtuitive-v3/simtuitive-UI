import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Config } from "../config";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    configUrl = new Config().apiUrl

    constructor(private http: HttpClient) { }

    getUserDetail() {
        return this.http.get(this.configUrl + '/user')
    }
    getWishList() {
        return this.http.get(this.configUrl + '/user/wishlist')
    }
    addToWishlist(id) {
        return this.http.put(this.configUrl + '/user/wishlist/' + id, {})
    }
    updateName(obj) {
        return this.http.put(this.configUrl + '/user/name', obj)
    }
    updateEmail(obj) {
        return this.http.put(this.configUrl + '/user/email', obj)
    }
    updateAddress(obj) {
        return this.http.put(this.configUrl + '/user/address', obj)
    }
    updatePassword(obj) {
        return this.http.put(this.configUrl + '/user/password', obj)
    }
    removeWishlist(id) {
        return this.http.delete(this.configUrl + '/user/wishlist/' + id, {})
    }

}
