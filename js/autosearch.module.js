// component to activate search when search scope changed updated 09/11/17 DW
// lightly edited for BC 2/19/25 EL
angular
  .module('autosearch',[])
  .component('prmTabsAndScopesSelectorAfter',{
    bindings: {parentCtrl: '<'},
    controller: function(){
      setTimeout(function() {
        getSearchScopes();

        function activateSearch() {  // execute clicking search button after 500 millisecs
          setTimeout(function() {
             document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click();
          }, 500);
          setTimeout(function() {
            getSearchScopes();
         }, 500)
        }
        
        function getSearchScopes() { // 500 millisecs after component initiates, get all the scopes and attach onclick functions
          var scopes = document.querySelectorAll('[id^="select_option_"]');
          for (const key in scopes) {
            if (scopes.hasOwnProperty(key)) {
              scopes[key].onclick = function() {
                activateSearch();
              };
            }
          }
        }
      }, 500);
    }
 });