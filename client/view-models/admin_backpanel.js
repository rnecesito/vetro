Template.admin_backpanel.rendered = function(){

	/*	$(document).on('click.bootstrap-toggle', '[data-toggle^=toggle]', function(e) {
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
		});*/


   			  $('#atable').dataTable({
			    "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
			    , "sPaginationType": "bootstrap"
			    , "oLanguage": {
			        "sLengthMenu": "_MENU_ records per page"
			    }
			});
   			//  console.log("" + $("ul").last().addClass("pagination"));

   			  	$("ul").last().addClass("pagination");


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
		console.log(this._id);
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

Template.admin_backpanel.created = function() {

};