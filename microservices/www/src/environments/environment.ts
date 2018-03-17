// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyChkz0AP7AGQQo8WXsQASN0ClS2m98ov28",
    authDomain: "hot-swap.firebaseapp.com",
    databaseURL: "https://hot-swap.firebaseio.com",
    projectId: "hot-swap",
    storageBucket: "hot-swap.appspot.com",
    messagingSenderId: "1029845744177"
  }
};
