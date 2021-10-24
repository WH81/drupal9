!((document, Drupal, $) => {
  'use strict';

  /**
   * Use this to describe what your behavior does.
   */
  Drupal.behaviors.parallax = {

    attach: function(context) {
      // If you don't need jQuery:
      // 1. Remove the `jQuery` and `$` refrences from this file.
      // 2. Remove the `core/jquery` dependency from the parallax library
      //    within the first_theme.libraries.yml file.
    }
  };
})(document, Drupal, jQuery);
