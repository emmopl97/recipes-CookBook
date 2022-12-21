import { formatCurrency } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';
import { instructionsSlide } from '../animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [instructionsSlide],
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  modal: boolean = true;
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;

  constructor(
    private authService: AuthService,
    private router: Router //private componentFactRes: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) return;
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      //sign in logic
      authObs = this.authService.login(email, password);
    } else {
      //sign up logic
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        console.log(errorMessage);
        //this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  onCloseInstructions() {
    this.modal = !this.modal;
  }

  /*private showErrorAlert(errorMessage: string) {
    //const alertCmp = new AlertComponent(); this is a JS component, not A
    const alertCompFactory =
      this.componentFactRes.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(alertCompFactory);

    component
  }*/ //This method is by creating components programmatically
}
