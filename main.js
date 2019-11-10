//Простой пример вывода данных в dom элемент
new Vue({
  el: '.app',
  data: {
    message: 'vue test',
    name: '',
    value: '',
    test: 'test value',
    showName: false,
    firstName: '',
    lastName: '',
    fruts: ['apple', 'orange', 'meal'],
    info: {
      name: 'Artem',
      email: 'Artem2503@yandex.ru'
    }
  },
  methods: {
    onChange(e) {
      alert('!!!!!!');
    },
    onClickBtn() {
      this.showName = !this.showName;
    },
    addFrut() {
      this.fruts.push('new frut')
    },
  },
  //Метод computed следит за изменениями state firstName и lastName и вызывает функцию fullName
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});