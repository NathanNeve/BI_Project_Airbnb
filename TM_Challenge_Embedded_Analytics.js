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

var appId = '0a99637f-8c27-4c64-8d5e-ca4cd404bceb';

// Connect to the Qlik Sense app
var app = qlik.openApp(appId, config);

// Embed the sheet into the specified container

//*********************CHANGE HERE***************************** */

//Embed visualizations into your webpage

// Embed visualizations into your webpage
// clearall button
$('.clear_selections').on('click',function(){
    app.clearAll();
})

app.visualization.get('LPdNeR').then(function(vis){
    vis.show("QV01");
});

app.visualization.get('VdjFsjx').then(function(vis){
    vis.show("QV02");
});

app.visualization.get('FPXjmBW').then(function(vis){
    vis.show("QV03");
});

// app.visualization.get('').then(function(vis){
//     vis.show("");
});
});

// own function to display the investor perspective
function showInvestorPerspective() {
    var investorPerspectiveDiv = document.getElementById('investorPerspective');
    var hostPerspectiveDiv = document.getElementById('hostPerspective');

    investorPerspectiveDiv.classList.toggle('d-none');
    hostPerspectiveDiv.classList.add('d-none'); // Hide host perspective div
}

// own function to display the host perspective
function showHostPerspective() {
    
    var investorPerspectiveDiv = document.getElementById('investorPerspective');
    var hostPerspectiveDiv = document.getElementById('hostPerspective');
    

    hostPerspectiveDiv.classList.toggle('d-none');
    investorPerspectiveDiv.classList.add('d-none'); // Hide investor perspective div
}
