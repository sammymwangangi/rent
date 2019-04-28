import { Component, OnInit, Input, HostListener } from '@angular/core';
// import { Stripe } from '@ionic-native/stripe/ngx';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

declare var Stripe;

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.page.html',
  styleUrls: ['./rentals.page.scss'],
})
export class RentalsPage implements OnInit {

  user$: Observable<User>;

  	constructor(
  		private router: Router,
      // private stripe: Stripe, 
      private firebaseService: FirebaseService,
      private auth: AuthService,
      public afAuth: AngularFireAuth,
      private functions: AngularFireFunctions
  		) 
  	{ 

  	}


  	@Input() amount;
    @Input() description;

    handler: StripeCheckoutHandler;

    confirmation: any;
    loading = false;

    ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_3PyCxdSZ21lC5Wg7lOs2gyF8',
      image: '/assets/icon/favicon.png',
      locale: 'auto',
      source: async (source) => {
        this.loading = true;
        const user = await this.afAuth.auth.onAuthStateChanged( user => {
          const fun = this.functions.httpsCallable('stripeCreateCharge');
          this.confirmation = fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
          });
          this.loading = false;

      }
    });
    }

    // Open the checkout handler
    async checkout(e) {
      const user = await this.afAuth.auth.onAuthStateChanged( user => {
        this.handler.open({
          name: 'Rent Payment',
          description: 'bed sitter flat',
          amount: 400000,
          currency: 'KES',
          email: user.email,
        });
        e.preventDefault();
      });
    }

    // Close on navigate
    @HostListener('window:popstate')
    onPopstate() {
    this.handler.close();
    }

}
