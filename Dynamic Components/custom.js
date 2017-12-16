var dogEdit = {
  template: '#dog-edit',
  props: ['initialQuantity', 'name', 'index'],
  data: function() {
    return {
      quantity: this.initialQuantity
    }
  },
  methods: {
    increment: function() {
      this.quantity += 1;
    }
  }
}

var dogShow = {
  template: '#dog-show',
  props: ['name', 'breed']
};

window.card = new Vue ({
  el: '#card',
  data: {
    title: 'Dogs',
    input: '',
    currentView: 'dog-edit',
    dogs: [
    	{
    		text: 'Shih Tzu',
    		quantity: 4,
        breed: 'Toy'
    	},
    	{
    		text: 'Pug',
    		quantity: 6,
        breed: 'Toy'
    	},
    	{
    		text: 'Shiba Inu',
    		quantity: 8,
        breed: 'Non-Sporting'
    	}
    ]
  },
  methods: {
    toggle: function() {
      this.currentView = this.currentView === 'dog-edit' ? 'dog-show' : 'dog-edit';
    }
  },
  computed: {
    editLabel: function() {
      return this.currentView === 'dog-edit' ? 'Show' : 'Edit';
    }
  },
  components: {
    'dog-edit': dogEdit,
    'dog-show': dogShow   
  }
});