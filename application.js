$(document).ready(function(){

  //  Clicking on title shows options //
  $(".title").click(function(){
    $(this)
    .parents(".box")
    .find(".hidden")
    .slideToggle()
  })

  //  Dropdown options makes automate changes //
  $("select").change(function(){
    $(".calculator").removeClass("bgred bgyellow bgblue");
    $(".calculator1").removeClass("red yellow blue");
    $(".fitbar").removeClass("bgred bgyellow bgblue red yellow blue");
    $(this).closest(".weight").removeClass("wscale-0 wscale-1 wscale-2 wscale-3 wscale-4 wscale-5");
    $(this).closest(".points").removeClass("pscale-0 pscale-1 pscale-2 pscale-3 pscale-4 pscale-5");
    
    //  Changes color of fitbar //
    var fit = $("#fit").text();
    if (fit < 50){
      $(".fitbar")
      .addClass("bgred");
      }else if (fit < 75){  
      $(".fitbar")
      .addClass("bgyellow");
      }else
      $(".fitbar")
      .addClass("bgblue");

    //  changes width of fitbar //
    var finalFit = fit + "%";
    $(".fitbar").css("width", finalFit)

    //  changes color of totalfit //
    var total = $("#fit").text();
    if (total < 50){
      $("#fit").parent()
      .addClass("red");
      }else if (total <75){
      $("#fit").parent()
      .addClass("yellow");
      }else
      $("#fit").parent()
      .addClass("blue");

    //  changes color of numbers from challenge  //
    var ta = +$("#challenge").text();
    if (ta < 50){
      $("#challenge").parent()
      .addClass("bgred");
      }else if (ta <75){
      $("#challenge").parent()
      .addClass("bgyellow");
      }else
      $("#challenge").parent()
      .addClass("bgblue");
    
    //  calculates environment  //
    var tb = +$("#environment").text();
    if (tb < 50){
      $("#environment").parent()
      .addClass("bgred");
      }else if (tb <75){
      $("#environment").parent()
      .addClass("bgyellow");
      }else
      $("#environment").parent()
      .addClass("bgblue");
    
    //  calculates economics  //
    var tc = +$("#economics").text();
    if (tc < 50){
      $("#economics").parent()
      .addClass("bgred");
      }else if (tc <75){
      $("#economics").parent()
      .addClass("bgyellow");
      }else
      $("#economics").parent()
      .addClass("bgblue");
    
    //  calculates competencies //
    var td = +$("#competencies").text();
    if (td < 50){
      $("#competencies").parent()
      .addClass("bgred");
      }else if (td <75){
      $("#competencies").parent()
      .addClass("bgyellow");
      }else
      $("#competencies").parent()
      .addClass("bgblue");

    //  changes "weight" dropdown background-color//
    var weight = +$(this).closest(".weight").val();
    switch (weight){
      case 0:
        $(this).closest(".weight")
        .addClass("wscale-0")
        break;
      case 1:
        $(this).closest(".weight")
        .addClass("wscale-1")
        break;
      case 2:
        $(this).closest(".weight")
        .addClass("wscale-2")
        break;
      case 3:
        $(this).closest(".weight")
        .addClass("wscale-3")
        break;
      case 4:
        $(this).closest(".weight")
        .addClass("wscale-4")
        break;
      case 5:
        $(this).closest(".weight")
        .addClass("wscale-5")
        break;
      default:
    }

    //  changes "points" dropdown background-color//
    var points = +$(this).closest(".points").val();
    switch (points){
      case 0:
        $(this).closest(".points")
        .addClass("pscale-0")
        break;
      case 1:
        $(this).closest(".points")
        .addClass("pscale-1")
        break;
      case 2:
        $(this).closest(".points")
        .addClass("pscale-2")
        break;
      case 3:
        $(this).closest(".points")
        .addClass("pscale-3")
        break;
      case 4:
        $(this).closest(".points")
        .addClass("pscale-4")
        break;
      case 5:
        $(this).closest(".points")
        .addClass("pscale-5")
        break;
      default:
    }


  }).change();
})