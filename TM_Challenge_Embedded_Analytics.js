/*** Fill in your information
 * Name: Nathan Neve
 * Class: 2DI
 * Application Name: Mastering Market Dynamics for Profitable Hosting
 */

// Qlik Sense Tenant
 var config = {
    host: 's11teoj2ewfxo25.eu.qlikcloud.com',
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: 'fD7MaGj9cDjkwmIIyD7fIT4YaDwqk-e5'
};

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


var appId = '0a99637f-8c27-4c64-8d5e-ca4cd404bceb';

// Connect to the Qlik Sense app
var app = qlik.openApp(appId, config);

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

app.visualization.get('FhYHPs').then(function(vis){
    vis.show("QV04");
});
app.visualization.get('QUqDZU').then(function(vis){
    vis.show("QV05");
});
app.visualization.get('bGxbmVY').then(function(vis){
    vis.show("QV06");
});

app.visualization.get('UjzGUQm').then(function(vis){
    vis.show("QV07");
});

app.visualization.get('').then(function(vis){
    vis.show("");
});

app.visualization.get('').then(function(vis){
    vis.show("");
});

app.visualization.get('').then(function(vis){
    vis.show("");
});

});
});


function scrollToLocation() {
    var locationElement = document.getElementById('Location');
    locationElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollToLabels() {
    var locationElement = document.getElementById('Labels');
    locationElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollToReviews() {
    var locationElement = document.getElementById('Reviews');
    locationElement.scrollIntoView({ behavior: 'smooth' });
}

// own function to display the location page
function showLocation() {
    var Location = document.getElementById('Location');
    var Labels = document.getElementById('Labels');
    var Reviews = document.getElementById('Reviews');

    Location.classList.toggle('d-none');
    Labels.classList.add('d-none'); // Hide labels div
    Reviews.classList.add('d-none'); // Hide reviews div
}

// own function to display the labels page
function showLabels() {
    var Location = document.getElementById('Location');
    var Labels = document.getElementById('Labels');
    var Reviews = document.getElementById('Reviews');

    Labels.classList.toggle('d-none');
    Location.classList.add('d-none'); // Hide Location div
    Reviews.classList.add('d-none'); // Hide Reviews div
}

// own function to display the reviews page
function showReviews() {
    var Location = document.getElementById('Location');
    var Labels = document.getElementById('Labels');
    var Reviews = document.getElementById('Reviews');

    Reviews.classList.toggle('d-none');
    Labels.classList.add('d-none'); // Hide Labels div
    Location.classList.add('d-none'); // Hide Location div
}


// topbutton
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}