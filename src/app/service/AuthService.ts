import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

// declare var toastr: any

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken = localStorage.getItem("access_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    idToken)
            });

            return next.handle(cloned).pipe(
                // map((event: HttpEvent<any>) => {
                // if (event instanceof HttpResponse) {
                // console.log('event--->>>', event);
                // }
                // return event;
                // })
                catchError((error: HttpErrorResponse) => {

                    // let data = {
                    //     reason: error && error.error.reason ? error.error.reason : '',
                    //     status: error.status
                    // };

                    if (error.error) {

                        if (error.error == "JwtExpire") {
                            // toastr.error("Session Expired")
                            this.router.navigate(['login'])
                        }
                        // toastr.error(error.error)
                    }
                    throw error
                })
            )
        }
        else {
            return
            // return next.handle(req);
        }
    }
}