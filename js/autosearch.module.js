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
          setTimeout(function() {  // get search scopes
            getSearchScopes();
         }, 500)
        }
        
        function getSearchScopes() {
          var searchScopes = document.querySelectorAll('[id^="select_option_"]'); // contain attribute id that starts w "select_option_"
          for (var i in searchScopes) {
            console.log(searchScopes[i]);
            searchScopes[i].onclick = function() {
              activateSearch();
            };
          }
        }
      }, 500);
    }
 });