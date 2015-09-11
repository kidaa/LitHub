var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'localhost',
  	user : 'root',
  	password : 'root',
  	database : 'greencommerce'
});

connection.connect();

module.exports = (function() {
	return {
		get: function(req, res) {
			connection.query('SELECT * FROM vendors', function(error, results) {
				res.json(results);
			});
		}	
	}
})();