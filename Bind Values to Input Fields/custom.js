var card = new Vue ({
  el: '#card',
  data: {
    checked: true,
    dogs: ['Shih Tzu', 'Samoyed', 'Shiba Inu'],
    selectedDog: '',
    breeds: [
      {name: 'Toy', value: 1},
      {name: 'Working', value: 2},
      {name: 'Non-Sporting', value: 3}
    ],
    selectedBreeds: [],
    single: '',
    message: ''
  }
});