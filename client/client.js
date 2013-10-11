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
}

Template.application_form.events({
	'click #gplusconnect': function(e,t){
		Meteor.loginWithGoogle({
			requestPermissions: ['profile', 'email', 'https://www.googleapis.com/auth/yt-analytics.readonly', 'https://www.googleapis.com/auth/youtube.readonly']
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
		Meteor.call("checkYT2",function(error,results){
			var jsondecoded = json_decode(results.content);
			console.log(jsondecoded);
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
