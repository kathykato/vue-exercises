var card = new Vue ({
  el: '#card',
  data: {
    title: 'Dogs',
    total: 0,
    amount: null
  },
  methods: {
    addDogs: function() {
      this.total += this.amount;
    }
  }
});