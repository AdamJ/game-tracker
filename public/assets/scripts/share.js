(function () {
  'use strict';
  //Check if share API is supported or not
  if (navigator.share !== undefined) {
    document.addEventListener('DOMContentLoaded', function() {
      var shareBtn = document.querySelector('.share');
      //Share button event listener
      shareBtn.addEventListener('click', function(event) {
        //Web share API
        navigator.share({
          title: "Moonsilver Waypoints",
          text: "Check out this great app for tracking Magic: The Gathering games!",
          url: "https://www.adamjolicoeur.me/"
        })
        .then(function() {
          console.info('Shared successfully.');
        })
        .catch(function (error) {
          console.error('Error in sharing: ', error);
        })
      });
    });
  }
})();
