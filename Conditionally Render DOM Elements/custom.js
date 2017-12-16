var card = new Vue ({
  el: '#card',
  data: {
    title: 'Dogs',
    input: '',
    breedUpdated: 0,
    dogsUpdated: 0,
    dogs: [
    	{
    		text: 'Shih Tzu',
    		quantity: 4
    	},
    	{
    		text: 'Pug',
    		quantity: 6
    	},
    	{
    		text: 'Shiba Inu',
    		quantity: 8
    	}
    ]
  },
  methods: {
    addDog: function(e) {
      e.preventDefault();

      if(!this.input) return '';
      this.dogs.push(
        {
          text: this.input,
          quantity: 1
        }
      );
      this.input = '';
    },
    removeDog: function(dog) {
      this.dogs.splice(dog, 1);
    }
  },
  computed: {
    totalDogs: function() {
      this.dogsUpdated += 1;
      var sum = 0;
      var dogs = this.dogs;

      for(var i in dogs) {
        sum += dogs[i].quantity;
      }

      return sum;
    },
    totalBreeds: function() {
      this.breedUpdated += 1;
      return this.dogs.length;
    }
  }
});