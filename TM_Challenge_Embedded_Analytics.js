/*** Fill in your information
 * Name: Nathan Neve
 * Class: 2DI
 * Application Name: Mastering Market Dynamics for Profitable Hosting
 */

//Change to your Qlik Sense Tenant
 var config = {
    host: 's11teoj2ewfxo25.eu.qlikcloud.com',
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: 'fD7MaGj9cDjkwmIIyD7fIT4YaDwqk-e5'
};

//*********************DO NOT CHANGE**************************** */
//Redirect to login if user is not logged in
async function login() {
  function isLoggedIn() {
      return fetch("https://"+config.host+"/api/v1/users/me", {
          method: 'GET',
          mode: 'cors',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
              'qlik-web-integration-id': config.webIntegrationId,
          },
      }).then(response => {
          return response.status === 200;
      });
  }
  return isLoggedIn().then(loggedIn =>{
      if (!loggedIn) {
          window.location.href = "https://"+config.host+"/login?qlik-web-integration-id=" + config.webIntegrationId + "&returnto=" + location.href;
          throw new Error('not logged in');
      }
  });
}
login().then(() => {
  require.config( {
      baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
      webIntegrationId: config.webIntegrationId
  } );
  //Load js/qlik after authentication is successful

    //Load js/qlik after authentication is successful
    require( ["js/qlik"], function ( qlik ) {
        qlik.on( "error", function ( error ) {
            $( '#popupText' ).append( error.message + "<br>" );
            $( '#popup' ).fadeIn( 1000 );
        } );
        $( "#closePopup" ).click( function () {
            $( '#popup' ).hide();
        } );
//*********************DO NOT CHANGE**************************** */

//*********************CHANGE HERE***************************** */

//Make a connection to your application
var app = qlik.openApp('5d1decde-6563-409c-be9d-ecfc72f7ab01', config);

//Embed visualizations into your webpage
app.visualization.get('LPdNeR').then(function(vis){
		vis.show("QV01");
});
//Clear Selection function 

//*********************CHANGE HERE***************************** */
});
});
