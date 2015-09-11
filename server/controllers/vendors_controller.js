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
		getMenu: function(req, res) {
			connection.query("SELECT vendors.name, vendors_has_strains.strain_id, vendors_has_strains.vendor_id, price_gram, price_eigth, price_quarter, price_half, price_oz, strains.name as strain_name, slug, category, symbol, description, star_image, thumb_img1, thumb_img2, thumb_img3, thumb_img4, fullsize_img1, fullsize_img2, fullsize_img3, fullsize_img4, test_graph, effects1, effects2, effects3, effects4, effects5, medical1, medical2, medical3, medical4, medical5, negatives1, negatives2, negatives3, negatives4, negatives5, grow_difficulty FROM vendors " + 
							"JOIN vendors_has_strains ON vendors.id = vendors_has_strains.vendor_id " + 
							"JOIN strains ON strains.id = vendors_has_strains.strain_id " + 
							"WHERE vendors.id = " + req.params.id, function(error, menu, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(menu);
				}
			});
		}
	}
})();