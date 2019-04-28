import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
// import { AuthService } from '../services/auth.service';
// import { AngularFireFunctions } from '@angular/fire/functions';
// // import { NavController, NavParams } from '@ionic/angular';

// declare var StripeCheckout: StripeCheckoutStatic;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.page.html',
  styleUrls: ['./stripe.page.scss'],
})
export class StripePage implements OnInit {

  	constructor(
  		private stripe: Stripe,
  		) {}

	// @Input() amount;
	// @Input() description;

	// handler: StripeCheckoutHandler;

	// confirmation: any;
	// loading = false;

	ngOnInit() {
	// this.handler = StripeCheckout.configure({
	//   key: 'pk_test_3PyCxdSZ21lC5Wg7lOs2gyF8',
	//   image: '/assets/icon/favicon.png',
	//   locale: 'auto',
	//   source: async (source) => {
	//     this.loading = true;
	//     const user = await this.auth.getUser();
	//     const fun = this.functions.httpsCallable('stripeCreateCharge');
	//     this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
	//     this.loading = false;

	//   }
	// });
	}

	// Open the checkout handler
	// async checkout(e) {
	// const user = await this.auth.getUser();
	// this.handler.open({
	//   name: 'Fireship Store',
	//   description: this.description,
	//   amount: this.amount,
	//   email: user.email,
	// });
	// e.preventDefault();
	// }

	// // Close on navigate
	// @HostListener('window:popstate')
	// onPopstate() {
	// this.handler.close();
	// }


}
