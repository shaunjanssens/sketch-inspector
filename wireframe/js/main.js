'use strict';

$(document).ready(function () {
  // Open of sluit menu als je op een laag met class=group klikt
  $('.layers .group > span').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    $(this).closest('.group').toggleClass('open');
  });

  // Open alle lagen als je klikt op "open all"
  $('.layerscontrol a[data-action=layerscontrolopenall]').on('click', function(e) {
    $('.layers').find('.group').addClass('open');
  });

  // Sluit alle lagen als je klikt op "close all"
  $('.layerscontrol a[data-action=layerscontrolcloseall]').on('click', function(e) {
    $('.layers').find('.group').removeClass('open');
  });

  // Fancy scrollbars
  var sidebarHeightLeft = $('.sidebar-left').height() - $('.layerscontrol').height();
  var sidebarHeightRight = $('.sidebar-right').height() - $('.sidebar__group--code').height() - 20;

  $('.sidebar-left .sidebar__scroll').height(sidebarHeightLeft).perfectScrollbar();
  $('.sidebar-right .sidebar__scroll').height(sidebarHeightRight).perfectScrollbar();

  // Voeg de hoogte en breedte toe aan de afbeelding
  var designWidth = Math.round(document.querySelector('.design img').naturalWidth / 2);
  var designHeight = Math.round(document.querySelector('.design img').naturalHeight / 2);

  $('.design img').width(designWidth).height(designHeight);
  $('.design .image').css('width', designWidth).css('height', designHeight);

  // Verander het thema als je op "Sketch Inspector klikt"
  $('.header h1').on('click', function(e) {
    $('body').toggleClass('darktheme');
  });

  var app = {
    file : '../data/testbestand.json',
    designdata : '',

    constructor : function() {
      app.getFile(app.file);
    },

    getFile : function(file) {
      $.getJSON( file, function( data ) {
        app.designdata = data;

        app.getLayers(app.designdata);
      });
    },

    getLayers : function(obj) {
      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          if (typeof obj[property] === "object") {
            app.getLayers(obj[property]);
          } else if (property === "_class") {

            switch (obj[property]) {
              case 'group': // Groep
              console.log(obj);
              break;

              case 'text': // Tekstlaag
              console.log(obj);
              break;

              case 'shapeGroup': // Vorm
              console.log(obj);
              break;

              case 'oval': // Ovaal
              console.log(obj);
              break;

              case 'bitmap': // Afbeelding
              console.log(obj);
              break;

              default:

            }
          }
        }
      }
    }
  }

  app.constructor();
});
