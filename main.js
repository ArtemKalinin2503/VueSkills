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
    phone: '',
    divClass: '',
    flags: {
      'div-border': false,
      'div-hover': false
    },
    properties: {
      color: 'inherit',
      backgroundColor: 'none'
    },
    inputForm: [
      {
        name: 'Name',
        value: ''
      },
      {
        name: 'Phone',
        value: ''
      },
      {
        name: 'Email',
        value: ''
      },
    ],
    randomNumber: [
      {
        min: 2,
        max: 10
      },
      {
        min: 5,
        max: 16
      },
    ],
    fruts: ['apple', 'orange', 'meal'],
    info: {
      name: 'Artem',
      email: 'Artem2503@yandex.ru'
    }
  },
  //Хуки
  beforeCreate() {
    console.log('beforeCreate') //Отработает первым
  },
  created() {
    console.log('created') //Отработает вторым
  },
  beforeMount() {
    console.log('beforeMount') //Отработает третьим после построение DOM
  },
  mounted() {
    console.log('mounted') //Отработает четвертым
  },
  beforeUpdate() {
    let pattern = /^[0-9]*$/; //Паттерн что можно вводить только цифры в поле
    let patternStr = /[^0-9]/g; //Паттерн что если в поле введено не цифра удалить этот символ
    if (!pattern.test(this.phone)) {
      this.phone = this.phone.replace(patternStr, '');
    }
    console.log('beforeUpdate') //Отрабатывает каждый раз когда изменяеться state
  },
  update() {
    console.log('update') //Отрабатывает каждый раз когда изменяеться state
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
    onInput(index, value) {
      let data = value;
      console.log(data)
    },
  },
  //Метод computed следит за изменениями state firstName и lastName и вызывает функцию fullName
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    //Данный метод будет проставлять класс элементу имя которого приходит из divClass (divClass - получает значение value на элементе input)
    divClassName() {
      return ['alert-' + this.divClass, 'my-' + this.divClass];
    },
  }
})
// Vue.component('app-some', {
//   props: ['min', 'max'],
//   template: `
//     <div>
//       {{ a }}
//     </div>
//   `,
//   data() {
//     return {
//       a: Math.floor(Math.random() * (this.max - this.min)) + this.min
//     }
//   }
// });