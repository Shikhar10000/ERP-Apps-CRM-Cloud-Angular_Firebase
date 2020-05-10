export const environment = {
  production: true,
  emailAPI: 'http://XXXXXX.com/contact-form.php',
  database: 'guest',
  adminKey: 'guest',
  firebase: {
    apiKey: "AIzaSyDg93OBq4bmTdRbV-4OUX4MACew-r8sKlE",
    authDomain: "crm-trul1-heroku.firebaseapp.com",
    databaseURL: "https://crm-trul1-heroku.firebaseio.com",
    projectId: "crm-trul1-heroku",
    storageBucket: "crm-trul1-heroku.appspot.com",
    messagingSenderId: "226069035545",
    appId: "1:226069035545:web:1ad9feddf360ee622a4888",
    measurementId: "G-KJVRRLLP77"
  },
  social: {
    fblink: 'https://www.facebook.com/elishconsulting',
    linkedin: 'https://www.linkedin.com/in/elishconsulting/',
    github: 'https://github.com/AmitXShukla',
    emailid: 'info@elishconsulting.com',
    twitter: 'https://twitter.com/ashuklax',
    website: 'http://elishconsulting.com',
    copyright: 'PoweredBy @copyright elishconsulting.com',
    company: "elishconsulting.com"
  },
  socialAuthEnabled: true,
  graphql: 'http://localhost:3000/graphql',
  helptext: {
    login: "Elish ERP CRM Cloud App provide three different methods to sign in.  You can use existing Google/Facebook login or using your email with any password. app password is NOT same as your email password.   Please send email to contact@elishconsulting.com for any support.",
    register: "This page is used to checkin and check out. Please chose appropraite checkin our checout type based on your guest status.",
    checkin: "Please pick your host and add your details for check in. Please see your address and photo is optional",
    checkout: "Please use your phone # or scan your basr code for faster check out.",
    aboutus: "Product about us information page.",
    badge: "Please accepts terms & condition and Print your badge, Please wear your badge while visiting and discard it after checkout.",
    config: "Setup your company branding defaults.",
    reports: "Run visitor register reports by Date or not-checked out visitor.",
  }
};