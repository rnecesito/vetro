Meteor.startup(function(){
	Session.setDefault('status_filter', 'Applied');
	Session.setDefault('dd_id', null);
});

Router.map(function(){
	this.route('index',{path: '/'});
	this.route('about',{path: '/about'});
	this.route('programs',{path: '/programs'});
	this.route('faqs',{path: '/faqs'});
	this.route('contact',{path: '/contact'});
	this.route('application_form',{path: '/partnership'});
	this.route('admin_backpanel', {path: '/admin'});
	this.route('login');
	this.route('oauthtest');
	this.route('application_success',{path: '/partnership/success'});
	this.route('applied', {path: '/admin/applied'});
	this.route('accepted', {path: '/admin/accepted'});
	this.route('denied', {path: '/admin/denied'});
	this.route('contract_sent', {path: '/admin/contract_sent'});
	this.route('declined', {path: '/admin/declined'});
	this.route('partner_queue', {path: '/admin/partner_queue'});
	this.route('video_claiming_sent', {path: '/admin/video_claiming_sent'});
	this.route('adsense_not_approved', {path: '/admin/adsense_not_approved'});
	this.route('disabled_by_youtube', {path: '/admin/disabled_by_youtube'});
	this.route('removed', {path: '/admin/removed'});
	this.route('blacklisted', {path: '/admin/blacklisted'});
	this.route('completed', {path: '/admin/completed'});
	this.route('dashboard', {path: '/dashboard'});
});