Meteor.startup(function(){
	Session.setDefault('status_filter', 'Applied');
	Session.setDefault('dd_id', null);
});

Router.map(function(){
	this.route('application_form',{path: '/'});
	this.route('admin_backpanel');
	this.route('login');
	this.route('oauthtest');
	this.route('application_success',{path: '/application_form/success'});
	this.route('applied', {path: '/admin_backpanel/applied'});
	this.route('accepted', {path: '/admin_backpanel/accepted'});
	this.route('denied', {path: '/admin_backpanel/denied'});
	this.route('contract_sent', {path: '/admin_backpanel/contract_sent'});
	this.route('declined', {path: '/admin_backpanel/declined'});
	this.route('partner_queue', {path: '/admin_backpanel/partner_queue'});
	this.route('video_claiming_sent', {path: '/admin_backpanel/video_claiming_sent'});
	this.route('adsense_not_approved', {path: '/admin_backpanel/adsense_not_approved'});
	this.route('disabled_by_youtube', {path: '/admin_backpanel/disabled_by_youtube'});
	this.route('removed', {path: '/admin_backpanel/removed'});
	this.route('blacklisted', {path: '/admin_backpanel/blacklisted'});
	this.route('completed', {path: '/admin_backpanel/completed'});
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

	$(document).ready(function() {
$('.atable').dataTable({
    "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
    , "sPaginationType": "bootstrap"
    , "oLanguage": {
        "sLengthMenu": "_MENU_ records per page"
    },
    "aLengthMenu": [[1, 3, 6, -1], [1, 3, 6, "All"]]
});
});


    // if (!($("#tabletest").hasClass("dataTable"))) {
    //     $('#tabletest').dataTable({
    //         "aaSorting": []
    //         , "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
    //         , "sPaginationType": "bootstrap"
    //         , "oLanguage": {
    //             "sLengthMenu": "_MENU_ records per page"
    //         }
    //         , "aoColumns": [
    //             { "sTitle": "First Data", "mData": function (data) { return data.firstData },
    //         } ]
        
    //     });

    //     $('#tabletest').dataTable().fnClearTable();
    //     $('#tabletest').dataTable().fnAddData(Collection.find().fetch());
    // }



// 	$(document).ready(function() {
// 		console.log("test")
// 	$('.atable').dataTable( {
// 		"aLengthMenu": [[1, 3, 6, -1], [1, 3, 6, "All"]]
// 		       } );
// 		    } );

// 	$.extend( true, $.fn.dataTableExt.oStdClasses, {
// 		"sPaginationType": "bootstrap",
// 	    "sWrapper": "dataTables_wrapper form-inline"
// 	} );

// $("#row").click(function(e) {
// 			alert("test");
//             // Constant retrieved from server-side via JSP
//             var maxRows = 2;

//             var table = document.getElementById('adtable');
//             var wrapper = table.parentNode;
//             var rowsInTable = table.rows.length;
//             var height = 0;
//             if (rowsInTable > maxRows) {
//                 for (var i = 0; i < maxRows; i++) {
//                     height += table.rows[i].clientHeight;
//                 }
//                 wrapper.style.height = height + "px";
//             }
//         });

	// $("#btnExport").click(function(e) {
 //      	var uri = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + $('#admintable').html();
	//   	var downloadLink = document.createElement("a");
	// 	downloadLink.href = uri;
	// 	downloadLink.download = "backpanel-data.xls";

	// 	document.body.appendChild(downloadLink);
	// 	downloadLink.click();
	// 	document.body.removeChild(downloadLink);

 // 		myWindow.focus();
 //    	e.preventDefault();
	// });

}

Template.to_excel.rendered = function(){
	$("#btnExport").click(function(e) {
      	var uri = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + $('#admintable').html();
	  	var downloadLink = document.createElement("a");
		downloadLink.href = uri;
		downloadLink.download = "backpanel-data.xls";

		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);

 		myWindow.focus();
    	e.preventDefault();
	});
}

Template.admin_backpanel.helpers({
	applicants: function(){
		return applications.find();
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.applied.helpers({
	applicants: function(){
		return applications.find({status:"Applied"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.accepted.helpers({
	applicants: function(){
		return applications.find({status:"Accepted"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.denied.helpers({
	applicants: function(){
		return applications.find({status:"Denied"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.contract_sent.helpers({
	applicants: function(){
		return applications.find({status:"Contract Sent"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.declined.helpers({
	applicants: function(){
		return applications.find({status:"Declined"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.partner_queue.helpers({
	applicants: function(){
		return applications.find({status:"Partner Queue"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.video_claiming_sent.helpers({
	applicants: function(){
		return applications.find({status:"Video Claiming Sent"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.adsense_not_approved.helpers({
	applicants: function(){
		return applications.find({status:"AdSense Not Approved"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.disabled_by_youtube.helpers({
	applicants: function(){
		return applications.find({status:"Disabled by YouTube"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.completed.helpers({
	applicants: function(){
		return applications.find({status:"Completed"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.removed.helpers({
	applicants: function(){
		return applications.find({status:"Removed"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.blacklisted.helpers({
	applicants: function(){
		return applications.find({status:"Blacklisted"});
	},
	getNS: function(cs){
		return application_status.find({cs:cs});
	}
})

Template.admin_backpanel.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.applied.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.accepted.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.removed.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.denied.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.declined.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.contract_sent.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.partner_queue.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.video_claiming_sent.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.adsense_not_approved.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.disabled_by_youtube.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.completed.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.blacklisted.events({
	"click .toggle": function(){
		if (applications.findOne({_id:this._id}).copyright_status) {
			applications.update({_id:this._id},{$set:{copyright_status:false}});
		}else{
			applications.update({_id:this._id},{$set:{copyright_status:true}});
		}
	},
	"click .dropdown-toggle": function(){
		Session.set('dd_id', this._id);
	},
	"click .status_option": function(){
		applications.update({_id:Session.get('dd_id')},{$set:{status:this.ns}});
	}
});

Template.to_excel.applicants = function(){
	return applications.find();
}

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
	if(Meteor.user()){
		Meteor.call("checkYT2", Meteor.user().services.google.accessToken, function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
	    	$('#yt_daily_views').val(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_daily_views2').html(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_total_views').val(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_total_views2').html(jsondecoded.items[0].statistics.viewCount);
	    	$('#yt_subscribers').val(jsondecoded.items[0].statistics.subscriberCount);
	    	$('#yt_subscribers2').html(jsondecoded.items[0].statistics.subscriberCount);
		});
		Meteor.call("getInfo", Meteor.user().services.google.id, Meteor.user().services.google.accessToken, function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
		})
	}
}

Template.application_form.events({
	'click #gplusconnect': function(e,t){
		Meteor.loginWithGoogle({
			requestPermissions: ['profile', 'email', 'https://www.googleapis.com/auth/yt-analytics.readonly', 'https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtube.readonly' , 'https://www.googleapis.com/auth/youtubepartner', 'https://www.googleapis.com/auth/youtubepartner-channel-audit', 'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/userinfo.profile']
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
		var channel = $('#yt_channel_name').val();
		// Meteor.call("checkYT", channel, function(error, results) {
		// 	var jsondecoded = json_decode(results.content);		    
		//     if (jsondecoded.items.length === 0) {
		//     	alert("Invalid YouTube channel name.");
		//     }else{
		//     	$('#yt_daily_views').val(jsondecoded.items[0].statistics.viewCount);
		//     	$('#yt_daily_views2').html(jsondecoded.items[0].statistics.viewCount);
		//     	$('#yt_total_views').val(jsondecoded.items[0].statistics.viewCount);
		//     	$('#yt_total_views2').html(jsondecoded.items[0].statistics.viewCount);
		//     	$('#yt_subscribers').val(jsondecoded.items[0].statistics.subscriberCount);
		//     	$('#yt_subscribers2').html(jsondecoded.items[0].statistics.subscriberCount);
		//     }
		// });
		Meteor.call("checkYT2", Meteor.user().services.google.accessToken, function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
		});
		// var url = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet&mine=true&access_token="+Meteor.user().services.google.accessToken;
		// var jsonresponse = file_get_contents(url);
		// console.log(jsonresponse);
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
				Meteor.logout(function(err){
					if(err){

					}else{

					}
				});
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
		this.php_jslast_error_json = 4; // usable by json_last_error()
		return null;
}
<<<<<<< HEAD

Template.admin_backpanel.created = function() {
	// console.log("admin_backpanel Created!")
	// var _pager = new Meteor.Paginator({
	//     templates: {
	//         content: "admin_backpanel"
	//     }
	//     , pagination: {
	//         resultsPerPage: 5 //default limit
	//     }
	//     , callbacks: {
	//         onPagingCompleted: function(skip, limit) {
	//             Session.set("pagingSkip", skip);
	//             Session.set("pagingLimit", limit);
	//         }
	//         , getDependentSubscriptionsHandles: function() {
	//               return [Meteor.subHandle];
	//         }
	//         , getTotalRecords: function(cb) {
	//               //you need to return the total record count here
	//               //using the provided callback
	//               Meteor.call("totalCount", function(err, result) {
	//                 cb(result);
	//               });
	//         }
	//         , onTemplateRendered: function() {
	//             //regular render code
	//         }
	//         , onTemplateCreated: function() {
	//             Session.set("pagingSkip", 0);
	//             Session.set("pagingLimit", 5);
	//         }
	//     }
	// });

	// console.log(_pager);

	// Deps.autorun(function() {
	// 	Meteor.subHandle = Meteor.subscribe("Applications", Session.get("pagingSkip"), Session.get("pagingLimit"));
	// })
};


function file_get_contents (url, flags, context, offset, maxLen) {
	var tmp, headers = [],
	newTmp = [],
	k = 0,
	i = 0,
	href = '',
	pathPos = -1,
	flagNames = 0,
	content = null,
	http_stream = false;
	var func = function (value) {
		return value.substring(1) !== '';
	};

	this.php_js = this.php_js || {};
	this.php_js.ini = this.php_js.ini || {};
	var ini = this.php_js.ini;
	context = context || this.php_js.default_streams_context || null;

	if (!flags) {
		flags = 0;
	}
	var OPTS = {
		FILE_USE_INCLUDE_PATH: 1,
		FILE_TEXT: 32,
		FILE_BINARY: 64
	};
	if (typeof flags === 'number') { // Allow for a single string or an array of string flags
		flagNames = flags;
	} else {
		flags = [].concat(flags);
		for (i = 0; i < flags.length; i++) {
			if (OPTS[flags[i]]) {
				flagNames = flagNames | OPTS[flags[i]];
			}
		}
	}

	if (flagNames & OPTS.FILE_BINARY && (flagNames & OPTS.FILE_TEXT)) { // These flags shouldn't be together
		throw 'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';
	}

	if ((flagNames & OPTS.FILE_USE_INCLUDE_PATH) && ini.include_path && ini.include_path.local_value) {
		var slash = ini.include_path.local_value.indexOf('/') !== -1 ? '/' : '\\';
		url = ini.include_path.local_value + slash + url;
	} else if (!/^(https?|file):/.test(url)) { // Allow references within or below the same directory (should fix to allow other relative references or root reference; could make dependent on parse_url())
		href = this.window.location.href;
		pathPos = url.indexOf('/') === 0 ? href.indexOf('/', 8) - 1 : href.lastIndexOf('/');
		url = href.slice(0, pathPos + 1) + url;
	}

	if (context) {
		var http_options = context.stream_options && context.stream_options.http;
		http_stream = !! http_options;
	}

	if (!context || http_stream) {
		var req = this.window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
		if (!req) {
			throw new Error('XMLHttpRequest not supported');
		}

		var method = http_stream ? http_options.method : 'GET';
		var async = !! (context && context.stream_params && context.stream_params['phpjs.async']);

		if (ini['phpjs.ajaxBypassCache'] && ini['phpjs.ajaxBypassCache'].local_value) {
			url += (url.match(/\?/) == null ? "?" : "&") + (new Date()).getTime(); // Give optional means of forcing bypass of cache
		}

		req.open(method, url, async);
		if (async) {
			var notification = context.stream_params.notification;
			if (typeof notification === 'function') {
			// Fix: make work with req.addEventListener if available: https://developer.mozilla.org/En/Using_XMLHttpRequest
				if (0 && req.addEventListener) { // Unimplemented so don't allow to get here
			} else {
				req.onreadystatechange = function (aEvt) { // aEvt has stopPropagation(), preventDefault(); see https://developer.mozilla.org/en/NsIDOMEvent
					var objContext = {
					responseText: req.responseText,
					responseXML: req.responseXML,
					status: req.status,
					statusText: req.statusText,
					readyState: req.readyState,
					evt: aEvt
					}; 

					var bytes_transferred;
					switch (req.readyState) {
						case 0:
						//     UNINITIALIZED     open() has not been called yet.
						notification.call(objContext, 0, 0, '', 0, 0, 0);
						break;
						case 1:
						//     LOADING     send() has not been called yet.
						notification.call(objContext, 0, 0, '', 0, 0, 0);
						break;
						case 2:
						//     LOADED     send() has been called, and headers and status are available.
						notification.call(objContext, 0, 0, '', 0, 0, 0);
						break;
						case 3:
						//     INTERACTIVE     Downloading; responseText holds partial data.
						bytes_transferred = req.responseText.length * 2; // One character is two bytes
						notification.call(objContext, 7, 0, '', 0, bytes_transferred, 0);
						break;
						case 4:
						//     COMPLETED     The operation is complete.
						if (req.status >= 200 && req.status < 400) {
						  bytes_transferred = req.responseText.length * 2; // One character is two bytes
						  notification.call(objContext, 8, 0, '', req.status, bytes_transferred, 0);
						} else if (req.status === 403) { // Fix: These two are finished except for message
						  notification.call(objContext, 10, 2, '', req.status, 0, 0);
						} else { // Errors
						  notification.call(objContext, 9, 2, '', req.status, 0, 0);
						}
						break;
						default:
						throw 'Unrecognized ready state for file_get_contents()';
					}
				}
			}
		}
	}

	if (http_stream) {
		var sendHeaders = http_options.header && http_options.header.split(/\r?\n/);
		var userAgentSent = false;
		for (i = 0; i < sendHeaders.length; i++) {
			var sendHeader = sendHeaders[i];
			var breakPos = sendHeader.search(/:\s*/);
			var sendHeaderName = sendHeader.substring(0, breakPos);
			req.setRequestHeader(sendHeaderName, sendHeader.substring(breakPos + 1));
			if (sendHeaderName === 'User-Agent') {
				userAgentSent = true;
			}
		}
		if (!userAgentSent) {
			var user_agent = http_options.user_agent || (ini.user_agent && ini.user_agent.local_value);
			if (user_agent) {
				req.setRequestHeader('User-Agent', user_agent);
			}
		}
		content = http_options.content || null;
	}

	if (flagNames & OPTS.FILE_TEXT) { // Overrides how encoding is treated (regardless of what is returned from the server)
		var content_type = 'text/html';
		if (http_options && http_options['phpjs.override']) { // Fix: Could allow for non-HTTP as well
			content_type = http_options['phpjs.override']; // We use this, e.g., in gettext-related functions if character set
			//   overridden earlier by bind_textdomain_codeset()
		} else {
			var encoding = (ini['unicode.stream_encoding'] && ini['unicode.stream_encoding'].local_value) || 'UTF-8';
			if (http_options && http_options.header && (/^content-type:/im).test(http_options.header)) { // We'll assume a content-type expects its own specified encoding if present
				content_type = http_options.header.match(/^content-type:\s*(.*)$/im)[1]; // We let any header encoding stand
			}
			if (!(/;\s*charset=/).test(content_type)) { // If no encoding
				content_type += '; charset=' + encoding;
			}
		}
		req.overrideMimeType(content_type);
	}
	else if (flagNames & OPTS.FILE_BINARY) { // Trick at https://developer.mozilla.org/En/Using_XMLHttpRequest to get binary
		req.overrideMimeType('text/plain; charset=x-user-defined');
	}

	try {
		if (http_options && http_options['phpjs.sendAsBinary']) { // For content sent in a POST or PUT request (use with file_put_contents()?)
			req.sendAsBinary(content); // In Firefox, only available FF3+
		} else {
			req.send(content);
		}
	} catch (e) {
		return false;
	}

	tmp = req.getAllResponseHeaders();
	if (tmp) {
		tmp = tmp.split('\n');
		for (k = 0; k < tmp.length; k++) {
			if (func(tmp[k])) {
				newTmp.push(tmp[k]);
			}
		}
		tmp = newTmp;
		for (i = 0; i < tmp.length; i++) {
			headers[i] = tmp[i];
		}
		this.$http_response_header = headers; // see http://php.net/manual/en/reserved.variables.httpresponseheader.php
	}

	if (offset || maxLen) {
		if (maxLen) {
			return req.responseText.substr(offset || 0, maxLen);
		}
		return req.responseText.substr(offset);
	}
	return req.responseText;
	}
	return false;
}
=======
>>>>>>> 0aec7e352794b40d4b73b1253f8404c8d87fc11c
