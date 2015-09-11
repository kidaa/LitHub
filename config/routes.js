var strains = require('./../server/controllers/strains_controller');
var users = require('./../server/controllers/users_controller');
var reservations = require('./../server/controllers/reservations_controller');
var vendors = require('./../server/controllers/vendors_controller');
var dispensaries = require('./../server/controllers/dispensaries_controller');

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getStrains', function(req, res) {
		strains.show(req, res);
	});

	app.post('/loginUser', function(req, res) {
		users.find(req, res);
	});
	
	app.post('/addUser', function(req, res) {
		users.add(req, res);
	});

	app.post('/getReservations', function(req, res) {
		reservations.retrieve(req, res);
	});

	app.get('/getAllReservations', function(req, res) {
		reservations.getAll(req, res);
	});

	app.get('/getMenu/:id', function(req, res) {
		vendors.getMenu(req, res);
	});

	app.get('/dispensaries', function(req, res) {
		dispensaries.get(req, res);
	});

	app.get('/strains/next', function(req, res) {
		strains.getPage(req, res);
	});

	app.post('/cancelOrder', function(req, res) {
		reservations.cancel(req, res);
	});

	app.post('/addOrder', function(req, res) {
		reservations.add(req, res);
	});

	app.get('/getItem/:vendorID/:strainID', function(req, res) {
		reservations.getItem(req, res);
	});

	app.post('/available', function(req, res) {
		reservations.available(req, res);
	});

	app.post('/unavailable', function(req, res) {
		reservations.unavailable(req, res);
	});
}