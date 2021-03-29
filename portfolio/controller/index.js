var information = require('../my.json')

exports.index =  function (req, res) {
  res.render(
  		'index', 
  		{ 
  			title: 'My Portfolio', 
  			message: 'My Resume',
  			information
  		}
  	)
  }		
