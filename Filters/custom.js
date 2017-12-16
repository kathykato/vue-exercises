var card = new Vue ({
  el: '#card',
  data: {
    title: 'Dogs',
    dogs: [
    	{
    		text: 'Shih Tzu',
    		weight: '4.5–8.6kg'
    	},
    	{
    		text: 'pug',
    		weight: '6–8kg'
    	},
    	{
    		text: 'Shiba Inu',
    		weight: '8–10kg'
    	}
    ]
  },
  filters: {
  	capitalize: function(value) {
  		if(!value) return '';
  		value = value.toString();
  		return value.charAt(0).toUpperCase() + value.slice(1);
  	},
  	undercase: function(value) {
  		if(!value) return '';
  		value = value.toString();
  		return value.toLowerCase();
  	},
  	url: function(value) {
  		if(!value) return '';
  		value = value.toString();
  		return 'https://en.wikipedia.org/wiki/' + value;
  	}
  }
});