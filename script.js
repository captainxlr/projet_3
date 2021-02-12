const card = $(".perspective__3d")

$("body").on("mousemove", function (t) {
  let 
  vertical = -($(window).innerWidth() / 2 - t.pageX) / 30,
  horizontal = ($(window).innerHeight() / 2 - t.pageY) / 30;

card.attr("style" , "transform: rotateY(" + vertical + "deg) rotateX(" + horizontal + "deg)" )
}
);