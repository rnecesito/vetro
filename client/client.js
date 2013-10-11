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