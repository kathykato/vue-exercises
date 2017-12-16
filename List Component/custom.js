var card = new Vue ({
  el: '#card',
  data: {
    title: 'Pending Invitations',
    items: [
    	{text: 'Erica Romaguera'},
    	{text: 'Lucas Schultz'},
    	{text: 'Nia Gutkowski'}
    ]
  },
  methods: {
  	addItem: function() {
  		var input = document.getElementById('item-form');

  		if(input.value !== '') {
  			this.items.push({
  				text: input.value
  			})
  			input.value = '';
  		}
  	},
  	deleteItem: function(index) {
  		this.items.splice(index, 1);
  	}
  }
});