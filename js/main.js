$(function () {
  $(".menuOpen .open").on("click", function () {
    $(".menuWrap").addClass("on");
  });
  $(".menuOpen .menuWrap .close").on("click", function () {
    $(".menuWrap").removeClass("on");
  });
});
