// component to activate search when search scope changed updated 09/11/17 DW
angular
  .module('autosearch',[])
  .component('prmTabsAndScopesSelectorAfter',{
    bindings: {parentCtrl: '<'},
    controller: function($scope){
      setTimeout(function() {
        function activateSearch() {
          setTimeout(function() {
             document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click()
          }, 500)
        }

        var searchScopes = document.querySelectorAll('[id^="select_option_"]')
        for (var i in searchScopes) {
          searchScopes[i].onclick = function() {
            activateSearch();
          };
        }
      }, 500)
    }
 });