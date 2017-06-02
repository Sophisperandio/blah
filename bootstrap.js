// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'DONUTS: Supercalifragilisticexpialidocious', 		// this is the TITLE place in the class
				'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=16&cad=rja&uact=8&ved=0ahUKEwjDzM7a5p_UAhVrl1QKHdVcAaoQFgh1MA8&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F1017060-doughnuts&usg=AFQjCNFSTofIK7Hj6CYItiasAsmTa0WgeQ',	// this is the LINK place in the class
				'Sophi Sperandio',			// this is the AUTHOR place in the class
				'doughnuts500-350.jpg',	// this is the IMAGE place in the class
				'Made from scratch and a delicacy.' // this is the BODY place in the class
				),

			new Post(
				'CAREMEL BROWNIE: delicious',
				'https://www.bettycrocker.com/recipes/product-recipes/brownie-mix-recipes/caramel-brownie-recipes',
				'Sophi Sperandio',
				'Chocolatecake.jpg', // this is a local image in the same folder as the js script
				'BROWNIES ARE SO GOOD.'
				),

			new Post(
				'ICE CREAM SANDWICHES: yes',
				'http://www.delish.com/cooking/g2135/ice-cream-sandwich-recipes/',
				'Sophi Sperandio',
				'icecream.jpeg',
				'Perfect for a day when your feeling down.'
				),

			new Post(
				'CHURROS: Scrumptious',
				',http://allrecipes.com/recipe/24700/churros/',
				'Sophi Sperandio',
				'churros.jpeg',
				'The good ones are only at Costco and 6 Flags.'
				),

			new Post(
				'Smore Pie: HEAVEN',
				',http://www.myrecipes.com/recipe/smore-pie',
				'Sophi Sperandio',
				'smores.jpg',
				'You have probably died if you are tasting this.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



