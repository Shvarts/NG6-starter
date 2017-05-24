angular.module('controller', [])
.controller('Header_Ctrl', ['$scope', function($scope) {
	$scope.focused = false;
	$scope.focused2 = false;
	$scope.focused3 = false;
	$scope.focused4 = false;

	$scope.categoryes = [
	{
		"category" : "All Departments",
		"link" : "aps"
	},{
		"category" : "Alexa Skills",
		"link" : "lexa-skills"
	},{
		"category" : "Amazon Fresh",
		"link" : "amazonfresh"
	},{
		"category" : "Amazon Video",
		"link" : "instant-video"
	},{
		"category" : "Amazon Warehouse Deals",
		"link" : "warehouse-deals"
	},{
		"category" : "Appliances",
		"link" : "appliances"
	},{
		"category" : "Apps & Games",
		"link" : "mobile-apps"
	},{
		"category" : "Arts, Crafts & Sewing",
		"link" : "arts-crafts"
	},{
		"category" : "Automotive Parts & Accessories",
		"link" : "automotive"
	},{
		"category" : "Baby",
		"link" : "baby-products"
	},{
		"category" : "Beauty & Personal Care",
		"link" : "beauty"
	},{
		"category" : "Books",
		"link" : "stripbooks"
	},{
		"category" : "CDs & Vinyl",
		"link" : "popular"
	},{
		"category" : "Cell Phones & Accessories",
		"link" : "mobile"
	},{
		"category" : "Clothing, Shoes & Jewelry",
		"link" : "fashion"
	},{
		"category" : "   Women",
		"link" : "fashion-womens"
	},{
		"category" : "   Men",
		"link" : "fashion-mens"
	},{
		"category" : "   Girls",
		"link" : "fashion-girls"
	},{
		"category" : "   Boys",
		"link" : "fashion-boys"
	},{
		"category" : "   Baby",
		"link" : "fashion-baby"
	},{
		"category" : "Collectibles & Fine Art",
		"link" : "collectibles"
	},{
		"category" : "Computers",
		"link" : "computers"
	},{
		"category" : "Courses",
		"link" : "courses"
	},{
		"category" : "Credit and Payment Cards",
		"link" : "financial"
	},{
		"category" : "Digital Music",
		"link" : "digital-music"
	},{
		"category" : "Electronics",
		"link" : "electronics"
	},{
		"category" : "Gift Cards",
		"link" : "gift-cards"
	},{
		"category" : "Grocery & Gourmet Food",
		"link" : "grocery"
	},{
		"category" : "Handmade",
		"link" : "handmade"
	},{
		"category" : "Health, Household & Baby Care",
		"link" : "hpc"
	},{
		"category" : "Home & Business Services",
		"link" : "local-services"
	},{
		"category" : "Home & Kitchen",
		"link" : "garden"
	},{
		"category" : "Industrial & Scientific",
		"link" : "industrial"
	},{
		"category" : "Kindle Store",
		"link" : "digital-text"
	},{
		"category" : ">Luggage & Travel Gear",
		"link" : "fashion-luggage"
	},{
		"category" : "Luxury Beauty",
		"link" : "luxury-beauty"
	},{
		"category" : "Magazine Subscriptions",
		"link" : "magazines"
	},{
		"category" : "Movies & TV",
		"link" : "movies-tv"
	},{
		"category" : "Musical Instruments",
		"link" : "mi"
	},{
		"category" : "Office Products",
		"link" : "office-products"
	},{
		"category" : "Patio, Lawn & Garden",
		"link" : "lawngarden"
	},{
		"category" : "Pet Supplies",
		"link" : "pets"
	},{
		"category" : "Prime Exclusive",
		"link" : "prime-exclusive"
	},{
		"category" : "Prime Pantry",
		"link" : "pantry"
	},{
		"category" : "Software",
		"link" : "software"
	},{
		"category" : "Sports & Outdoors",
		"link" : "sporting"
	},{
		"category" : "Tools & Home Improvement",
		"link" : "tools"
	},{
		"category" : "Toys & Games",
		"link" : "toys-and-games"
	},{
		"category" : "Vehicles",
		"link" : "vehicles"
	},{
		"category" : "Video Games",
		"link" : "videogames"
	},{
		"category" : "Wine",
		"link" : "wine"
	}
	]

	$scope.selectedCat = $scope.categoryes[0]; 

}])

