'use strict';

$(document).ready(function () {

  /**
   * Sidebars class
   * @type {{init: init}}
   */
  var sidebars = {
    /**
     * Initialiseer custom scrollbars
     */
    init: function () {
      // Haal de hoogte van beide sidebars op
      var sidebarHeightLeft = $('.sidebar-left').height() - $('.layerscontrol').height();
      var sidebarHeightRight = $('.sidebar-right').height() - $('.sidebar__group--code').height() - 20;

      // Initialiseer perdectScrollbar
      $('.sidebar-left .sidebar__scroll').height(sidebarHeightLeft).perfectScrollbar();
      $('.sidebar-right .sidebar__scroll').height(sidebarHeightRight).perfectScrollbar();
    }
  };
  sidebars.init();

  /**
   * Layers class
   * @type {{toggle: toggle}}
   */
  var layers = {
    // Open / sluit elke groep door erop te klikken
    toggle: function (layer) {
      $(layer).closest('.group').toggleClass('open');
    },

    openLayer: function (id) {
      layerscontrol.closeAll();
      $('.layers .layer[data-objectid=' + id + ']').addClass('selected').parents('li.group').addClass('open');
    },
  };

  $('.layers .group > span').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    layers.toggle(this)
  });

  $('.layers .layer span').on('click', function () {
    var id = $(this).closest('.layer').data('objectid');
    hotspots.selectHotspot($('.hotspots .hotspots__item[data-objectid=' + id + ']'));
  });


  /**
   * Layerscontrol class
   * @type {{openAll: openAll, closeAll: closeAll}}
   */
  var layerscontrol = {
    // Open alle lagen
    openAll: function () {
      $('.layers').find('.group').addClass('open');
    },

    // Sluit alle lagen
    closeAll: function () {
      layerscontrol.unselectAll();
      $('.layers').find('.group').removeClass('open');
    },

    unselectAll : function () {
      $('.layers li').removeClass('selected');
    }
  };

  $('.layerscontrol a[data-action=layerscontrolopenall]').on('click', function (e) {
    e.preventDefault();
    layerscontrol.openAll();
  });
  $('.layerscontrol a[data-action=layerscontrolcloseall]').on('click', function (e) {
    e.preventDefault();
    layerscontrol.closeAll();
  });

  /**
   * Image class
   * @type {{init: init}}
   */
  var image = {
    init: function () {
      var designWidth = Math.round(document.querySelector('.design img').naturalWidth / 2);
      var designHeight = Math.round(document.querySelector('.design img').naturalHeight / 2);

      $('.design img').width(designWidth).height(designHeight);
      $('.design .image, .design .hotspots').css('width', designWidth).css('height', designHeight);
    }
  };
  image.init();

  var hotspots = {
    drawHotspot: function (data) {
      var hotspot = '<div ' +
          'class="hotspots__item" ' +
          'data-name="' + data.name + '" ' +
          'data-objectid="' + data.objectID + '" ' +
          'style="top: ' + data.rect.y + 'px; left: ' + data.rect.x + 'px; width: ' + data.rect.width + 'px; height: ' + data.rect.height + 'px;"' +
          '></div>';

      $('.hotspots').append(hotspot);
    },

    clearHotspots: function () {
      $('.hotspots .hotspots__item').removeClass('selected');
    },

    selectHotspot: function (hotspot) {
      hotspots.clearHotspots();
      $(hotspot).addClass('selected');
      hotspots.getData($(hotspot).attr('data-objectid'));
      layers.openLayer($(hotspot).attr('data-objectid'));
    },

    getData: function (objectID) {
      var data;
      // Zoek naar het object met ObjectID
      $.each(app.designdata.artboards[0].layers, function (index, layer) {
        if (layer["objectID"] == objectID) {
          Properties.show(layer);
          return false;
        }
      });
    },
  };
  $('body').on('click', '.hotspots .hotspots__item', function (e) {
    hotspots.selectHotspot(this);
  });

  var Properties = {
    clear: function () {
      $('.sidebar-right .properties').html('');
      $('.sidebar-right .sidebar__group--code').html('');
      $('.template .style__value').text('-').removeAttr('style');
    },

    show: function (layer) {
      Properties.clear();

      $('.sidebar-right .properties').append($('.template#modal-properties').html());
      $('.style__value[data-value=x]').text(layer.rect.x + app.unitPixels);
      $('.style__value[data-value=y]').text(layer.rect.y + app.unitPixels);
      $('.style__value[data-value=width]').text(layer.rect.width + app.unitPixels);
      $('.style__value[data-value=height]').text(layer.rect.height + app.unitPixels);
      if (layer.opacity) $('.style__value[data-value=opacity]').text(layer.opacity * 100 + app.unitOpacity);

      Properties.showCss(layer.css);

      if (layer.type == 'text') {
        $('.sidebar-right .properties').append($('.template#modal-typeface').html());
        if (layer.content) $('.style__value[data-value=typecontent]').text(layer.content);
        if (layer.fontFace) $('.style__value[data-value=typefamily]').text(layer.fontFace);
        if (layer.fontSize) $('.style__value[data-value=typesize]').text(layer.fontSize + app.unitPixels);
        if (layer.letterSpacing) $('.style__value[data-value=typecharspace]').text(layer.letterSpacing + app.unitPixels);
        if (layer.lineHeight) $('.style__value[data-value=typelineheight]').text(layer.lineHeight + app.unitPixels);
        if (layer.color["color-hex"]) $('.style__value[data-value=typecolor]').text(layer.color["color-hex"]);
      }

      if (typeof layer.fills !== 'undefined' && layer.fills.length > 0) {
        for (var i in layer.fills) {
          if (layer.fills[i].fillType == 'color') {
            $('.sidebar-right .properties').append($('.template#modal-fill').html());

            var modal = $('.sidebar-right .properties .sidebar__group:last');
            $(modal).find($('.style__value[data-value=fillcolor]')).text(layer.fills[i].color["color-hex"]);
          }
        }
      }

      if (typeof layer.shadows !== 'undefined' && layer.shadows.length > 0) {
        for (var i in layer.shadows) {
          $('.sidebar-right .properties').append($('.template#modal-shadow').html());

          var modal = $('.sidebar-right .properties .sidebar__group:last');

          $(modal).find('.sidebar__title').text(app.firstLetterCapital(layer.shadows[i].type) + ' shadow');
          if (layer.shadows[i].blurRadius) $(modal).find($('.style__value[data-value=blurradius]')).text(layer.shadows[i].blurRadius + app.unitPixels);
          if (layer.shadows[i].offsetX) $(modal).find($('.style__value[data-value=bluroffsetX]')).text(layer.shadows[i].offsetX + app.unitPixels);
          if (layer.shadows[i].offsetY) $(modal).find($('.style__value[data-value=bluroffsetY]')).text(layer.shadows[i].offsetY + app.unitPixels);
          if (layer.shadows[i].spread) $(modal).find($('.style__value[data-value=blurspread]')).text(layer.shadows[i].spread + app.unitPixels);
          if (layer.shadows[i].color['color-hex']) $(modal).find($('.style__value[data-value=blurcolor]')).text(layer.shadows[i].color['color-hex']);

        }
      }

      Properties.updateColors();
      Properties.updateCopyText();
    },

    showCss: function (data) {
      if (typeof data !== 'undefined' && data.length > 0) {
        var css = "";

        for (var i in data) {
          css += data[i] + '<br />';
        }

        $('.sidebar-right .sidebar__group--code').append($('.template#modal-code').html());
        $('.sidebar-right .sidebar__group--code code').html(css);
      }
    },

    updateColors: function () {
      $('.style.style--color').each(function () {
        var color = $(this).find('.style__value').text().substring(0, 7);
        $(this).find('.style__color').css('background-color', color);
      });
    },

    updateCopyText : function () {
      $('.style__value').each(function() {
        $(this).attr('data-clipboard-text', $(this).text());
      });

      $('.sidebar__group--code .sidebar__title').attr('data-clipboard-text', $('.sidebar__group--code code').text());
    }
  };

  var app = {
    file: 'data/app.json',
    designdata: '',
    unitPixels: 'px',
    unitOpacity: '%',

    constructor: function () {
      app.getFile(app.file);
    },

    getFile: function (file) {
      $.getJSON(file, function (data) {
        app.designdata = data;

        app.getLayers(app.designdata);
      });
    },

    getLayers: function (design) {
      $.each(design.artboards[0].layers, function (index, value) {
        hotspots.drawHotspot(value);
      });

      app.fakeItTillYouMakeIt();
    },

    firstLetterCapital: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    fakeItTillYouMakeIt: function () {
      var layersList = [];
      var hotspotsList = [];

      $('ul.layers li.layer').each(function () {
        layersList.push(this);
      });

      $('.hotspots .hotspots__item').each(function () {
        hotspotsList.push(this);
      });

      layersList.reverse();

      for (var i in layersList) {
        $(layersList[i]).attr('data-objectid', $(hotspotsList[i]).data('objectid'));
      }
    }
  };
  app.constructor();

  new Clipboard('.style__value');
  new Clipboard('.sidebar__group--code .sidebar__title');

});
