function initializeJS(){$(window).scroll(function(){0==$(window).scrollTop()?$("#navbar").css({display:"none"}):$("#navbar").css({display:"block"}),$("#navbar").affix({offset:{top:function(){return this.top=$(".section.welcome").height()-70}}})}),$(".second-choice").on("click",function(){$(".graph").show(),$(".reg").hide(),$(".second-choice h3").css({color:"#000"}),$(".second-choice p").css({color:"#000"}),$(".second-choice .service-icon").css({opacity:"1"}),$(".first-choice h3").css({color:"#c4c4c4"}),$(".first-choice p").css({color:"#c4c4c4"}),$(".first-choice .service-icon").css({opacity:"0.3"}),$(".service-img").animo({animation:"fadeInLeft"})}),$(".first-choice").on("click",function(){$(".graph").hide(),$(".reg").show(),$(".first-choice h3").css({color:"#000"}),$(".first-choice p").css({color:"#000"}),$(".first-choice .service-icon").css({opacity:"1"}),$(".second-choice h3").css({color:"#c4c4c4"}),$(".second-choice p").css({color:"#c4c4c4"}),$(".second-choice .service-icon").css({opacity:"0.3"}),$(".service-img").animo({animation:"fadeInLeft"})}),jQuery("h1").fitText(1.8,{minFontSize:"30px",maxFontSize:"45px"}),jQuery("h2").fitText(1.5,{minFontSize:"20px",maxFontSize:"35px"}),jQuery(window).width()>480&&jQuery("html").niceScroll({cursorcolor:"rgba(225,225,225,0.8)",cursorborder:"1px solid #FFF"}),jQuery(document).localScroll(),jQuery(document).on("click",".navbar-collapse.in",function(a){jQuery(a.target).is("a")&&jQuery(this).removeClass("in").addClass("collapse")}),function(){function a(){var a=jQuery(".sports"),b=(jQuery(window).width(),jQuery(window).height()),c=b;a.css({"min-height":c+"px"});var d=jQuery(".sports .vcenter"),e=d.height(),f=a.height(),g=(f-e)/2;d.css({"margin-top":g-100+"px"});var h=jQuery(".sports .content"),e=h.height(),f=a.height(),g=(f-e)/2;h.css({"margin-top":g-100+"px"})}jQuery(window).on("resize",a),jQuery(document).on("ready",a)}(),jQuery(window).width()>480&&(jQuery(".parallax-bg1").parallax("50%",.5),jQuery(".parallax-bg2").parallax("50%",.5),jQuery(".parallax-bgc").parallax("50%",.5),jQuery(".parallax-bg4").parallax("100%",.1)),jQuery(".animated").appear(),jQuery(document.body).on("appear",".animated",function(){var a=jQuery(this).attr("data-animation");("shake"==a||"tada"==a||"bounceIn"==a)&&jQuery(this).css("opacity","1"),jQuery(window).width()>480&&jQuery(this).each(function(){jQuery(this).addClass(a)})})}jQuery(window).load(function(){jQuery(window).trigger("hashchange"),jQuery(window).trigger("resize"),jQuery('[data-spy="scroll"]').each(function(){$(this).scrollspy("refresh")})}),jQuery(document).ready(function(){initializeJS(),$("#myCarousel2").carousel({interval:3e3}),$("#myCarousel3").carousel({interval:3e3})});