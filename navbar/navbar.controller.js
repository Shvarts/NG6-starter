import navbar from './navbar.factory';

class NavbarController {
	constructor() {
		this.categories = navbar.getCategories();
		this.selectedCat = navbar.selectFirstCategories();
		this.finalSearch = "";
		this.searchText = "";
		this.submenuList = navbar.getSubmenu();
		this.blockView = false;
	}

	setCategory(cat) {
		this.finalSearch = this.searchText;
		const arrayOfCategory = ['All Departments', 'Alexa Skills', 'Amazon Fresh', 'Amazon Video', 'Amazon Warehouse Deals', 'Appliances', 'Apps & Games', 'Arts, Crafts & Sewing', 'Automotive Parts & Accessories', 'Baby', 'Beauty & Personal Care', 'Books', 'CDs & Vinyl', 'Cell Phones & Accessories', 'Clothing, Shoes & Jewelry', 'Women', 'Men', 'Girls', 'Boys', 'Baby', 'Collectibles & Fine Art', 'Computers', 'Courses', 'Credit and Payment Cards', 'Digital Music', 'Electronics', 'Gift Cards', 'Grocery & Gourmet Food', 'Handmade', 'Amazon Video', 'Health, Household & Baby Care', 'Home & Business Services', 'Home & Kitchen', 'Industrial & Scientific', 'Kindle Store', 'Luggage & Travel Gear', 'Luxury Beauty', 'Magazine Subscriptions', 'Movies & TV', 'Musical Instruments', 'Office Products', 'Patio, Lawn & Garden', 'Pet Supplies', 'Prime Exclusive', 'Prime Pantry', 'Software', 'Sports & Outdoors', 'Tools & Home Improvement', 'Toys & Games', 'Vehicles', 'Video Games', 'Wine'];

		for (let i = 0; i < arrayOfCategory.length; i++) {
			if(cat==arrayOfCategory[i])
			{
				this.items = this.categories[i].items;
			}
		}
	};
}

export default NavbarController;
