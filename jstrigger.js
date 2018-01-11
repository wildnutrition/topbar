   $(function() {
  setTimeout(function() {
    return $(".bar").animate({
      height: "toggle"
    }, "slow")
  }, 300);
  return $("#ok").on("click", function() {
    $("#barwrap").css("margin-bottom", "0px");
    $(".bar").animate({
      height: "toggle"
    }, "slow");
    return !1
  })
});
