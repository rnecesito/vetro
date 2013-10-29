Template.partnership.rendered = function(){
	Session.set('page', 'partnership');
	var page = Session.get('page');
	console.log(page);
	$('.menu-li').removeClass('active');
	$('#'+page).addClass("active");

	$(function(){
	    $(".copyright-file").hover(function(){
	      $(this).find(".hover-step").fadeIn();
	    }
	    ,function(){
	        $(this).find(".hover-step").fadeOut();
	    });        
	});
	if(Meteor.user()){
		Meteor.call("checkYT2", Meteor.user().services.google.accessToken, function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
			$('#channel_id').val(jsondecoded.items[0].id);
			$('#yt_channel_name').val(jsondecoded.items[0].snippet.title);
			$('#yt_channel_name2').html(jsondecoded.items[0].snippet.title);
	    	$('#yt_daily_views').val(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_daily_views2').html(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_total_views').val(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_total_views2').html(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_subscribers').val(jsondecoded.items[0].statistics.subscriberCount);
	    	$('#yt_subscribers2').html(jsondecoded.items[0].statistics.subscriberCount);
	    	$('#cr_status').val(jsondecoded.items[0].auditDetails.overallGoodStanding);
	    	// if(jsondecoded.items[0].auditDetails.overallGoodStanding === true){
	    	// 	$('.cr-status').val("In Good Standing");
	    	// }else{
	    	// 	$('.cr-status').val("Not In Good Standing");
	    	// }
		});
		Meteor.call("getInfo", Meteor.user().services.google.id, Meteor.user().services.google.accessToken, function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
		})
	}
}

Template.partnership.events({
	'click #gplusconnect': function(e,t){
		Meteor.loginWithGoogle({
			requestPermissions: ['profile', 'email', 'https://www.googleapis.com/auth/yt-analytics.readonly', 'https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtube.readonly' , 'https://www.googleapis.com/auth/youtubepartner', 'https://www.googleapis.com/auth/youtubepartner-channel-audit', 'https://www.googleapis.com/auth/plus.me']
		});
	},
	'click .logoutgplus': function(e,t){
		Meteor.logout(function(err){
			if(err){

			}else{

			}
		});
	},
	'click .getYouTubeData':function(e,t){
		Meteor.call("checkYT2", Meteor.user().services.google.accessToken, function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
		});
	},
	'submit': function(e,t){
		form = {};

		if(!$('#yt_age').val()){
			console.log("NO VALUE for age");
		}else if(!$('#yt_country').val()){
			console.log("NO VALUE cty");
		}else if(!$('#skype_email').val()){
			console.log("NO VALUE skype");
		}else if(!$('#paypal_email').val()){
			console.log("NO VALUE paypal_email");
		}else if(!$('#copyright_status_link').val()){
			console.log("NO VALUE copyright_status_link");
		}else if(!$('#music_permissions').val()){
			console.log("NO VALUE music_permissions");
		}else{
			$.each( $("#app_form1").serializeArray(),function(){
				form[this.name] = this.value;
			});
			form['status'] = "Applied";

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
					Meteor.logout();
				}
			});
		}
	}
});

Template.partnership.helpers({
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
		this.php_jslast_error_json = 4; // usable by json_last_error()
		return null;
}