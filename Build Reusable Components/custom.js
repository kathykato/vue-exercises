var card = new Vue ({
  el: '#card',
  data: {
    title: 'Dogs',
    input: '',
    total: 0,
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
    incrementTotal: function(amount) {
      this.total += amount;
    }
  },
  components: {
    'dog-counter': {
      template: '#dog-counter',
      props: ['name', 'initialQuantity'],
      data: function() {
        this.$emit('increment', this.initialQuantity);
        return {
          quantity: this.initialQuantity
        }
      },
      methods: {
        increment: function() {
          this.quantity += 1;
          this.$emit('increment', 1);
        }
      }
    }    
  }
});