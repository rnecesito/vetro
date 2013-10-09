Meteor.startup(function(){
	
});

Router.map(function(){
	this.route('application_form',{path: '/'});
	this.route('admin_backpanel');
	this.route('login');
	this.route('oauthtest');
	this.route('application_success');
});

Template.admin_backpanel.rendered = function(){
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

	$("#btnExport").click(function(e) {
    window.open('data:application/vnd.ms-excel,' + $('#admintable').html());
    e.preventDefault();
});

}

Template.admin_backpanel.helpers({
	applicants: function(){
		return applications.find();
	}
})

Template.oauthtest.rendered = function(){
	// (function() {
	// 	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	// 	po.src = 'https://apis.google.com/js/client:plusone.js';
	// 	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	// })();
	console.log(Meteor.user());
}

Template.oauthtest.events({
	'click .getYouTubeStats': function(e,t){
		Meteor.call("checkYT", function(error, results) {
			var jsondecoded = json_decode(results.content);
		    console.log(jsondecoded); //results.data should be a JSON object
		});
	}
});

Template.application_form.rendered = function(){
	$(function(){
	    $(".copyright-file").hover(function(){
	      $(this).find(".hover-step").fadeIn();
	    }
	    ,function(){
	        $(this).find(".hover-step").fadeOut();
	    });        
	});
}

Template.application_form.events({
	'click #gplusconnect': function(e,t){
		Meteor.loginWithGoogle({
			requestPermissions: ['email', 'profile']
		});
	},
	'click .logoutgplus': function(e,t){
		Meteor.logout(function(err){
			if(err){

			}else{

			}
		});
	},
	'submit': function(e,t){
		form = {};

		$.each( $("#app_form1").serializeArray(),function(){
			form[this.name] = this.value;
		});
		form['status'] = "Applied";
		form['copyright_status'] = true;

		applications.insert( form, function(err){
			if(err){
				if(err.error === 403){

				}else{
					alert("Something went wrong. Please try again.");
					console.log(err);
				}

			}
			else{
				$('#app_form1')[0].reset();
				Router.go('application_success')
			}
		});
	}
});

Template.application_form.helpers({
	youtubeUser: function(){
		if(Meteor.users.findOne() != null){
			return Meteor.users.findOne()
		}
	},
	youtubeInfo: function(email){

	}
})

function json_decode (str_json) {	
	var json = this.window.JSON;
	if (typeof json === 'object' && typeof json.parse === 'function') {
		try {
			return json.parse(str_json);
		} catch (err) {
			if (!(err instanceof SyntaxError)) {
				throw new Error('Unexpected error type in json_decode()');
			}
		this.php_js = this.php_js || {};
		this.php_js.last_error_json = 4; // usable by json_last_error()
		return null;
		}
	}

	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	var j;
	var text = str_json;

	cx.lastIndex = 0;
	if (cx.test(text)) {
		text = text.replace(cx, function (a) {
		return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		});
	}

	if ((/^[\],:{}\s]*$/).
		test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
		replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
		replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

		j = eval('(' + text + ')');

		return j;
	}

	this.php_js = this.php_js || {};
		this.php_js.last_error_json = 4; // usable by json_last_error()
		return null;
}
