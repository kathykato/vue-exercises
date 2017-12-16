var card = new Vue ({
  el: '#card',
  data: {
    title: 'Dogs',
    input: '',
    buttonText: 'Add Dog',
    dogs: [
    	{text: 'Shih Tzu'},
    	{text: 'Pug'},
    	{text: 'Shiba Inu'}
    ]
  },
  watch: {
    input: _.debounce(function() {
      this.buttonText = this.input !== '' ? 'Add ' + this.input : 'Add Dog';
    }, 250)
  },
  methods: {
    addDog: function(e) {
      e.preventDefault();

      if(!this.input) return '';
      this.dogs.push(
        {text: this.input}
      );
      this.input = '';
    }
  },
  computed: {
    buttonDisabled: function() {
      return this.input == '';
    }
  }
});