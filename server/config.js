Accounts.loginServiceConfiguration.remove({
	service: "google"
});

Accounts.loginServiceConfiguration.insert({
	service: "google",
	clientId: "202055712427.apps.googleusercontent.com",
	secret: "Wc9ELISnDLNZ-BBGTVbKUJ7w"
});


// Meteor.publish("Applications", function(skip, limit) {
// 	return applications.find({}, {
//   		skip: skip || 0,
//   		limit: limit || 10
//     });
// });

Meteor.methods({
	checkYT: function (channel) {
		this.unblock();
		return Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet&forUsername="+channel+"&key=AIzaSyDL6F2UDnezIht4VT-nnKpD_vZSu1ujEyY");
	},
	checkYT2: function (channel) {
		this.unblock();
		var at = Meteor.user().services.google.accessToken;
		return Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet&mine=true&key=AIzaSyDL6F2UDnezIht4VT-nnKpD_vZSu1ujEyY&access_token="+at);
	},
	test_fn: function() {
		this.unblock();
		var url = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet&mine=true&key=AIzaSyDL6F2UDnezIht4VT-nnKpD_vZSu1ujEyY&access_token="+Meteor.user().services.google.accessToken;
		console.log(url);
		// var params = {
		// 	access_token: Meteor.user().services.google.accessToken,
		// 	part: "snippet",
		// 	mine: "true"
		// };
		return Meteor.http.call("GET",url);
	},
	totalCount: function() {
  		return applications.find().count();
    }
});

Meteor.startup(function(){
	application_status.remove({});
	application_status.insert({cs:"Applied", ns: "Accepted", color: "blue"});
	application_status.insert({cs:"Applied", ns: "Denied", color: "blue"});
	application_status.insert({cs:"Accepted", ns: "Contract Sent", color: "green"});
	application_status.insert({cs:"Denied" , ns: "Applied", color: "red"});
	application_status.insert({cs:"Denied" , ns: "Removed", color: "red"});
	application_status.insert({cs:"Denied" , ns: "Blacklisted", color: "red"});
	application_status.insert({cs: "Contract Sent", ns: "Declined", color: "grey"});
	application_status.insert({cs: "Contract Sent", ns: "Partner Queue", color: "grey"});
	application_status.insert({cs: "Declined", ns: "Applied", color: "grey"});
	application_status.insert({cs: "Partner Queue", ns: "Video Claiming Sent", color: "grey"});
	application_status.insert({cs: "Video Claiming Sent", ns: "AdSense Not Approved", color: "grey"});
	application_status.insert({cs: "Video Claiming Sent", ns: "Disabled by YouTube", color: "grey"});
	application_status.insert({cs: "Video Claiming Sent", ns: "Completed", color: "grey"});
	application_status.insert({cs: "AdSense Not Approved", ns: "Applied", color: "grey"});
	application_status.insert({cs: "AdSense Not Approved", ns: "Denied", color: "grey"});
	application_status.insert({cs: "Disabled by YouTube", ns: "Applied", color: "grey"});
	application_status.insert({cs: "Disabled by YouTube", ns: "Denied", color: "grey"});
	application_status.insert({cs: "Removed", color: "grey"});
	application_status.insert({cs: "Blacklisted", color: "grey"});
})