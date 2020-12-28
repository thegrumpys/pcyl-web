import React, { Component } from 'react';
import OktaSignIn from '@okta/okta-signin-widget/dist/js/okta-sign-in.min'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import config from '../config';

export default class SignInPageWidget extends Component {
  constructor(props) {
    super(props);
//    console.log("In SignInPageWidget.constructor props=",props);

    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;
//    console.log("config=",config);
//    console.log("config.oidc=",config.oidc);
    
//    console.log("pkce=",pkce);
//    console.log("issuer=",issuer);
//    console.log("clientId=",clientId);
//    console.log("redirectUri=",redirectUri);
//    console.log("scopes=",scopes);
//    var baseUrl = issuer.split('/oauth2')[0];
//    console.log("baseUrl=",baseUrl);

//    // Begin Diagnostic
//    var xhr = new XMLHttpRequest();
//    if ("withCredentials" in xhr) {
//        xhr.onerror = function() {
//          console.log('Invalid URL or Cross-Origin Request Blocked.  You must explicitly add this site (' + window.location.origin + ') to the list of allowed websites in the administrator UI');
//        }
//        xhr.onload = function() {
//          console.log('responseText=',this.responseText);
//        };
//        xhr.open('GET', issuer + '/v1/keys', true);
//        xhr.withCredentials = true;
//        xhr.send();
//    } else {
//        console.log("CORS is not supported for this browser!");
//    }
//    // End Diagnostic
    
    this.signIn = new OktaSignIn({
        /**
         * Note: when using the Sign-In Widget for an OIDC flow, it still
         * needs to be configured with the base URL for your Okta Org. Here
         * we derive it from the given issuer for convenience.
         */
        baseUrl: issuer.split('/oauth2')[0],
        clientId,
        redirectUri,
        logo: '/favicon.ico',
        i18n: {
          en: {
            'primaryauth.title': 'Sign in to ODOP',
          },
        },
        authParams: {
          pkce,
          issuer,
          display: 'page',
          scopes,
        },

        features: { registration:true },

        helpLinks: {
          custom: [
            {
              text: 'About ODOP user accounts',
              href: 'https://thegrumpys.github.io/odop/About/userAccounts',
              target: '_blank'
            },
            {
              text: 'ODOP Message Of The Day',
              href: 'https://thegrumpys.github.io/odop/About/messageOfTheDay',
              target: '_blank'
            },
            {
              text: 'Learn about ODOP',
              href: 'https://thegrumpys.github.io/odop/About',
              target: '_blank'
            }
          ]
        }

      });
    }

  componentDidMount() {
//    console.log('In SignInPageWidget.componentDidMount this.signIn=',this.signIn);
    if (this.signIn != null) this.signIn.remove();
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      (res) => {
        /**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
//          console.log('In SignInPageWidget.onLoginSuccess res=',res);
      },
      (err) => {
//        console.log('In SignInPageWidget.onLoginError err=',err);
        throw err;
      }
    );
  }

  componentWillUnmount() {
//      console.log('In SignInPageWidget.componentWillUnmount this.signIn=',this.signIn);
  }

  render() {
//    console.log('In SignInPageWidget.render this=', this);
    return (
      <div>
        <div id="sign-in-widget" />
      </div>
    );
  }
}