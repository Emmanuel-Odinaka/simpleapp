var models = require('../models/index');
// var models = require('../models');

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

exports.create_task_post = function (req, res) {
	models.Task.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_task_get = function (req, res) {
	models.Task.destroy({
		where: {
			id: req.params.task_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_timesheet_post = function (req, res) {
	models.Timesheet.create({
		name: req.body.name,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_timesheet_get = function (req, res) {
	models.Timesheet.destroy({
		where: {
			id: req.params.task_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_teamodinaka_post = function (req, res) {
	models.Teamodinaka.create({
		name: req.body.name,
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
			id: req.params.task_id
		}
	}).then(function () {
		res.redirect('/');
	});
};