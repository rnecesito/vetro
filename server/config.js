Accounts.loginServiceConfiguration.remove({
	service: "google"
});

Accounts.loginServiceConfiguration.insert({
	service: "google",
	clientId: "1062445461634.apps.googleusercontent.com",
	secret: "iJRIeBUiKnuyjDq1JV-br9YT"
});

	clientId: "202055712427.apps.googleusercontent.com",
	secret: "Wc9ELISnDLNZ-BBGTVbKUJ7w"
});

Meteor.methods({
    checkYT: function () {
        this.unblock();
        return Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/channels?part=contentDetails%2Cstatistics%2Csnippet&forUsername=DevDiaryOnanyTV&key=AIzaSyDL6F2UDnezIht4VT-nnKpD_vZSu1ujEyY");
    },
    test_fn: function(params) {
    	Meteor.http.get(url, {params: params}, function (err, result) {
	        console.log(result.statusCode, result.data);
	        var retdata =  result.data;
    		Session.set("myItems", retdata.items);
      	});
    }
});
