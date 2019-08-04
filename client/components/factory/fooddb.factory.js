angular.module('MyApp')
	.factory('Food', ['$http',  function($http){
			var o = {
				foods: []
			};
			var i =0;
			//add new foods
			o.createBatch = function(food) {
				return $http.post('/api/foods', food, {
				}).then(function(response) {
					o.foods.push(response.data);
					i++;
				});
			};

			//add new food
			o.create = function(food) {
				return $http.post('/api/foods', food, {
				}).then(function(response) {
					o.foods.push(response.data);
				});
			};
			//get all foods
			o.getAll = function() {
				return $http.get('/api/foods', {
				}).then(function(response) {
					angular.copy(response.data, o.foods);
				});
			};

			// search foods
			o.search = function(keyword) {
				return $http({
					url: '/api/foods/search',
					method: 'GET',
					params: { key_word: keyword }
				}).then(function(response) {
					angular.copy(response.data, o.foods);
				})
			}

			//update a food
			o.update = function(food, updateFleet, index) {
				return $http.put('/api/foods/' + food._id + '/edit', updateFood, {
				})
			};
			//remove a food
			o.delete = function(food, index) {
				return $http.delete('/api/foods/' + food._id + '/delete', {
				})
			}; 
			//get a single food
			o.get = function(id) {
				return $http.get('/api/foods/' + id).then(function(res) {
					return res.data;
				});
			};

			return o;
		}])