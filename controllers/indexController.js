var models = require('../models/index');

exports.index = function (req, res) {
	models.User.findAll({
		// include: [models.Task],
		include: [models.Timesheet],
		include: [models.Teamodinaka]
	}).then(function (users) {
		res.render('index', {
			title: 'Homepage',
			users: users
		});
	});

};