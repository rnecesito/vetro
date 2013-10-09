Accounts.loginServiceConfiguration.remove({
	service: "google"
});

Accounts.loginServiceConfiguration.insert({
	service: "google",
	clientId: "202055712427.apps.googleusercontent.com",
	secret: "Wc9ELISnDLNZ-BBGTVbKUJ7w"
});

Meteor.methods({
    checkYT: function () {
        this.unblock();
        return Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet&forUsername=DevDiaryOnanyTV&key=AIzaSyDL6F2UDnezIht4VT-nnKpD_vZSu1ujEyY");
    },
    test_fn: function() {
    	var url = "https://www.googleapis.com/youtube/v3/channels";
      	var params = {
        	access_token: Meteor.user().services.google.accessToken,
	        part: "snippet",
	        mine: "true"
      	};
      	return Meteor.http.call("GET", url, {params: params});
    	// return Meteor.http.get(url, {params: params}, function (err, result) {
	     //    console.log(result.statusCode, result.data);
	     //    var retdata =  result.data;
    		// Session.set("myItems", retdata.items);
      	// });
    }
});