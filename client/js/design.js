Meteor.startup(function(){
});

Template.index.rendered = function () {
	Session.set('page', 'index');
	setMenu();
};

Template.about.rendered = function () {
	Session.set('page', 'about');
	setMenu();
};

Template.programs.rendered = function () {
	Session.set('page', 'programs');
	setMenu();
};

Template.faqs.rendered = function () {
	Session.set('page', 'faqs');
	setMenu();
};

Template.contact.rendered = function () {
	Session.set('page', 'contact');
	setMenu();
};

function setMenu(){
	var page = Session.get('page');
	console.log(page);
	$('.menu-li').removeClass('active');
	$('#'+page).addClass("active");
}