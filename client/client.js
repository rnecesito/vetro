Meteor.startup(function(){
	
});

Router.map(function(){
	this.route('application_form',{path: '/'});
	this.route('admin_backpanel');
	this.route('login');
	this.route('oauthtest');
});

Template.admin_backpanel.rendered = function(){
	console.log("Rendered");
	!function ($) {
		$(document).on('click.bootstrap-toggle', '[data-toggle^=toggle]', function(e) {
			var $toggle = $(this);
			var $input = $(this).find('input[type=checkbox]');
			if ($toggle.hasClass('off')) {
				$toggle.attr('class', 'toggle ' + $toggle.find('.toggle-on').attr('class').replace(/toggle-on/g,''))
				$input.prop('checked', true);
				$toggle.removeClass('off');
			} else {
				$toggle.attr('class', 'toggle ' + $toggle.find('.toggle-off').attr('class').replace(/toggle-off/g,''))
				$input.prop('checked', false);
				$toggle.addClass('off');
			}
		});
	}(window.jQuery);
}

Template.oauthtest.rendered = function(){
	// (function() {
	// 	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	// 	po.src = 'https://apis.google.com/js/client:plusone.js';
	// 	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	// })();
	console.log(Meteor.user());
}

Template.application_form.rendered = function(){
$(function(){
    $(".copyright-file").hover(function(){
      $(this).find(".hover-step").fadeIn();
    }
                    ,function(){
                        $(this).find(".hover-step").fadeOut();
                    }
                   );        
	});
}

