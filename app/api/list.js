var api = {};

var COUNT = 3

var lists = [
	{_id: 1, title: 'ABC', items: ['a', 'b', 'c'], author: 'Rodrigo'},
	{_id: 2, title: 'DEF', items: ['d', 'e', 'f'], author: 'Dayse'},
	{_id: 3, title: 'GHI', items: ['g', 'h', 'i'], author: 'Baddock'}
];

api.listAll = function(req, res) {
	res.json(lists);
};

api.getById = function(req, res) {
	var list = lists.find(function(list) {
		return list._id == req.params.id;
	});
	res.json(list);
};

api.add = function(req, res) {
	var list = req.body;
	list._id = ++COUNT;
	lists.push(list);
	res.json(list);
};

api.remove = function(req, res) {
	lists = lists.filter(function(list) {
		return list._id != req.params.id;
	});
	res.sendStatus(204);
};

api.update = function(req, res) {
	var index = lists.findIndex(function(list) {
		return list._id == req.params.id;
	});

	lists[index] = req.body;

	res.json(lists[index]);
};

module.exports = api;