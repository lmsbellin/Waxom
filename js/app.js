// for carosel

$('.carousel').carousel();





//for last project filter//

filterSelection("all")

		function filterSelection(c) {
			var x, i;
			x = document.getElementsByClassName("column");
			if (c == "all") c = "";
			for (i = 0; i < x.length; i++) {
				myRemoveClass(x[i], "show");
				if (x[i].className.indexOf(c) > -1) myAddClass(x[i], "show");
			}
		}

		function myAddClass(element, name) {
			var i, arr1, arr2;
			arr1 = element.className.split(" ");
			arr2 = name.split(" ");
			for (i = 0; i < arr2.length; i++) {
				if (arr1.indexOf(arr2[i]) == -1) {
					element.className += " " + arr2[i];
				}
			}
		}

		function myRemoveClass(element, name) {
			var i, arr1, arr2;
			arr1 = element.className.split(" ");
			arr2 = name.split(" ");
			for (i = 0; i < arr2.length; i++) {
				while (arr1.indexOf(arr2[i]) > -1) {
					arr1.splice(arr1.indexOf(arr2[i]), 1);
				}
			}
			element.className = arr1.join(" ");
		}


		// Add active class to the current button (highlight it)
		var btnContainer = document.getElementById("myBtnContainer");
		var btns = btnContainer.getElementsByClassName("btn");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function() {
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			});
		}




//for counter
var a = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            
          }
        });
    });
    a = 1;
  }
});





		//<!-- scroler -->		
	
	$(".scroll a").click(function(){
	
		$('html,body').animate({'scrollTop':0},1000);      
			return false;
	});
	
	$(window).scroll(function(){
		if($(window).scrollTop()>799)
		{
			$('.scroll a').fadeIn(800);
			return false;
		}
		else
		{ 
			$('.scroll a').fadeOut(500);
				return false;
		}
	});
	




//about//
	$('.about1').click(function(){
		$('html,body').animate({'scrollTop':480},800)
			return false;
	});

//portfolio//
	$('.portfolio1').click(function(){
		$('html,body').animate({'scrollTop':960},1000)
		return false;
	});
//contact//
	
	$('.contact1').click(function(){
		$('html,body').animate({'scrollTop':5300},2000)
			return false;
	});
