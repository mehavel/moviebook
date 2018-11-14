// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //baseUrl:'https://lixo-booking-gateway-lixohealthcare-ui.1d35.starter-us-east-1.openshiftapps.com',
  baseUrl:'https://lixo-admin-gateway-lixohealthcare-ui.1d35.starter-us-east-1.openshiftapps.com',
  //Authentication and Registration
  login:'/api/rest/v1/user/authenticate',
  register:'/api/rest/v1/user/registration',
  updateprofile:'/api/rest/v1/user/update-profile',
  retrieveprofile:'/api/rest/v1/user/retrieve-profile',
  resetpassword:'/api/rest/v1/user/forgot-secret',
  //Showservice operation
  nowshowing:'/api/rest/v1/shows/get/now-showing',
  showtmovieiming:'/api/rest/v1/shows/movie/show/times',  
  showvenuetiming:'/api/rest/v1/shows/venue/show/times'
  
 };

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
