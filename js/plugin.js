(function($) {
  $.fn.findReplace = function(options) {

    var settings = $.extend({
      findText: null,
      replaceText: "",
      customClass: "",
      completeCallback: null
    }, options);
    return this.each(function() {
      var StringToFind = settings.findText;
      var regExpression = new RegExp(StringToFind, "g");
      var replacement = "<span class='" + settings.customClass + "'>" + settings.replaceText + "</span>";
      $(this).html(
        $(this).html().replace(regExpression, replacement)
      );

      if ($.isFunction(settings.completeCallback)) {
        settings.completeCallback.call(this);
      }
    });
  };
}(jQuery));

$("a").findReplace({
  findText: "Lorem Ipsum",
  replaceText: "I was replaced too!",
  customClass: "match-link",
  completeCallback: function() {
    $('.notification').text('Exectued the plugin on all links').fadeOut(5000);
  }
});

$("section").findReplace({
  findText: "Lorem Ipsum",
  replaceText: "Ipsum Lorem",
  customClass: "match-section"
});

$("ul").findReplace({
  findText: "Lorem",
  replaceText: "Replaced"
});