var models = require('../models/index');

exports.create_post = function (req, res) {
	models.User.create({
		username: req.body.username
	}).then(function () {
		res.redirect('/');
	});
};
exports.create_get = function (req, res) {
	res.render('form', {title: 'teamodinaka created'})
	console.log('teamodinaka created successfully')
};

exports.delete_user_get = function (req, res) {
	models.User.destroy({
		where: {
			id: req.params.user_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_teamodinaka_post = function (req, res) {
	models.Teamodinaka.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};
exports.create_teamodinaka_get = function (req, res) {
	res.render('form2', {title: 'teamodinaka created'})
	console.log('teamodinaka created successfully')

};

exports.delete_user_teamodinaka_get = function (req, res) {
	models.Teamodinaka.destroy({
		where: {
			id: req.params.teamodinaka_id
		}
	}).then(function () {
		res.redirect('/');
	});
};