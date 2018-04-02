function main() {

    window.addEventListener("resize", function() {

	    window.location.reload();

	});

    /* Menu bar animation */

    var counter = 0;

    $(window).on("wheel", function(e) {

	    var delta = e.originalEvent.deltaY;

		if (delta > 0) {

			if (counter === 0) {
				counter++;
				$("#menuBar").animate({
					marginTop:"-90px"
				})
			}

		} else {

			if (counter === 1) {
				counter--;
				$("#menuBar").animate({
					marginTop:"0px"
				})
			}

		}

    })

    /* Menu button animation */

    function rotation() {

	    var time = setInterval(setTime, 5)

	    var deg = 0;

	    function setTime() {

	    	deg++;
	    	if (deg < 46) {

		    	$("#firstLine").css({
			    	"transform":"rotate(" + deg + "deg)"
			    })

			    $("#thirdLine").css({
			    	"transform":"rotate(" + (-deg) + "deg)"
			    })
			    
	    	} else {
	    		clearInterval(time);
	    	}

	    }

    }

    function rotationBack() {

    	var time = setInterval(setTime, 5)

	    var deg = 45;

	    function setTime() {

	    	deg--;
	    	if (deg > -1) {

		    	$("#firstLine").css({
			    	"transform":"rotate(" + (-deg) + "deg)"
			    })

			    $("#thirdLine").css({
			    	"transform":"rotate(" + deg + "deg)"
			    })
			    
	    	} else {
	    		clearInterval(time);
	    	}

	    }

    }

    var btn = false;
    var activeBtn = true;

    $("#btn").on("click", function() {

    	if (!btn) {

	    	if (activeBtn === true) {

		    	activeBtn = false;
		    	btn = true;

			    if ($(window).width() > 414) {

				    $("#menu").animate({
				    	"width": "+=380px"
				    }, "slow");

				    $("#firstLine").animate({
				    	top:"30px"
				    }, function() {

				        $("#secondLine").css({
				        	"width":"0",
				        	"border":"0"
				        })

				    });

				    $("#thirdLine").animate({
				    	top:"30px"
				    }, function() {

					    rotation();
					    activeBtn = true;

				    });

			    } else if ($(window).width() <= 414 && $(window).width() > 360) {

			    	$("#menu").animate({
				    	"width": "+=310px"
				    }, "slow");

				    $("#firstLine").animate({
				    	top:"25px"
				    }, function() {

				        $("#secondLine").css({
				        	"width":"0",
				        	"border":"0"
				        })

				    });

				    $("#thirdLine").animate({
				    	top:"25px"
				    }, function() {

					    rotation();
					    activeBtn = true;

				    });

			    } else {

				    $("#menu").animate({
				    	"width": "+=260px"
				    }, "slow");

				    $("#firstLine").animate({
				    	top:"25px"
				    }, function() {

				        $("#secondLine").css({
				        	"width":"0",
				        	"border":"0"
				        })

				    });

				    $("#thirdLine").animate({
				    	top:"25px"
				    }, function() {

					    rotation();
					    activeBtn = true;

				    });

			    }

            }

	    } else {

	    	if (activeBtn === true) {

		    	activeBtn = false;
		    	btn = false;

		    	rotationBack();

		    	if ($(window).width() > 414) {

			    	$("#menu").animate({
				    	"width": "-=380px"
				    }, "slow", function() {

					    $("#secondLine").css({
				        	"width":"50px",
				        	"border":"3px solid #EEEBE0"
				        })

					    $("#firstLine").animate({
					    	top:"20px"
					    });

					    $("#thirdLine").animate({
					    	top:"40px"
					    });

					    activeBtn = true;

				    });

			    } else if ($(window).width() <= 414 && $(window).width() > 360) {

				    $("#menu").animate({
				    	"width": "-=310px"
				    }, "slow", function() {

					    $("#secondLine").css({
				        	"width":"50px",
				        	"border":"3px solid #EEEBE0"
				        })

					    $("#firstLine").animate({
					    	top:"15px"
					    });

					    $("#thirdLine").animate({
					    	top:"35px"
					    });

					    activeBtn = true;

				    });

			    } else {

				    $("#menu").animate({
				    	"width": "-=260px"
				    }, "slow", function() {

					    $("#secondLine").css({
				        	"width":"50px",
				        	"border":"3px solid #EEEBE0"
				        })

					    $("#firstLine").animate({
					    	top:"15px"
					    });

					    $("#thirdLine").animate({
					    	top:"35px"
					    });

					    activeBtn = true;

				    });

			    }

            }
	    }

    })

    $("#boxThree").on("click", function() {

	    $('html, body').animate({
	        scrollTop: $("#main").offset().top
	    }, 800);

    })

    $("#boxThree").mouseover(function() {

	    $("#boxThree p").animate({
	    	color:"#EEEBE0"
	    })

    })

    $("#boxTwo").on("click", function() {

	    $('html, body').animate({
	        scrollTop: $("#portfolio").offset().top
	    }, 800);

	    counter++;
		$("#menuBar").animate({
			marginTop:"-90px"
		})

    })

    $("#box").on("click", function() {

	    $('html, body').animate({
	        scrollTop: $("#contacts").offset().top
	    }, 800);

	    counter++;
		$("#menuBar").animate({
			marginTop:"-90px"
		})

    })

    /* Close tag and display animation */

    function closeTagAnimation() {

        var time = setInterval(setTime, 5)

        var diameter = 50;

        function setTime() {

		    if (diameter < 70) {

			    $(".closeTag").css({
				    "width": diameter + "px",
				    "height": diameter + "px",
				    "margin-right":"-=0.5",
				    "margin-top":"-=0.5"
			    });

			    $(".closeTag p").css({
			    	"font-size":"+=1"
			    });

			    diameter++;

		    } else {

			    clearInterval(time);

			    var newTime = setInterval(setNewTime, 20);

                function setNewTime() {

				    if (diameter > 50) {

					    $(".closeTag").css({
						    "width": diameter + "px",
						    "height": diameter + "px",
						    "margin-right":"+=0.5",
						    "margin-top":"+=0.5"
					    });

					    $(".closeTag p").css({
					    	"font-size":"-=1"
					    });

					    diameter--;

				    } else {

					    clearInterval(newTime);

					    $("#display").hide();
					    $("#formDisplay").hide();

					    $("#main").removeClass("opacity");
				    	$("#portfolio").removeClass("opacity");
				        $("#contacts").removeClass("opacity");
				        $("#menuBar").removeClass("opacity");

				    }

                }

		    }

        }

    }

    $(".closeTag").on("click", function() {

	    closeTagAnimation();

    })

    $(".frame").mouseover(function() {

	    $(this).find("div:first-child()").show();;

    })

    $(".frame").mouseout(function() {

	    $(this).find("div:first-child()").hide();;

    })

    $(".frame").on("click", function() {

    	$("#main").addClass("opacity");
    	$("#portfolio").addClass("opacity");
        $("#contacts").addClass("opacity");
        $("#menuBar").addClass("opacity");
    	  
	    $("#display").show();

	    var text = $(this).find("p").text();
	    
	    $("#display").find("h1").text(text);

    })

    $("#contactBtn").on("click", function() {

	    $("#main").addClass("opacity");
    	$("#portfolio").addClass("opacity");
        $("#contacts").addClass("opacity");
        $("#menuBar").addClass("opacity");

        $("#formDisplay").show();

    })

}

$(document).ready(main);