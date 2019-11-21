// Компонент component-one
<template>
  <div class="wrapper">
    <!--Передача текста-->
    <div>
       <p>{{ message }}</p>
    </div>
    <!--Деректива v-model получает value данного input-->
    <div>
      <input type="text" v-model="name" />
      <!--Вывод value из input-->
      <p>{{ name }}</p>
    </div>
    <!--Вывод url с помощью дерективы :href-->
    <div>
      <a :href="url">https://google.com</a>
    </div>
    <!--Обработка события click -->
    <div>
      <p>{{ counter }}</p>
      <button @click="riseCounter">Counter</button>
    </div>
    <!--Обработка события плюс работа с html элементом на котором произошло событие-->
    <div>
      <p @mouseover="onHover">Text html love</p>
    </div>
    <!--Обработка события клик и передача параметра и изменение стиля кнопки-->
    <div>
      <h2>{{ counter2 }}</h2>
      <button @click="counClick(5, $event)">Увеличить на 5</button>
      <button @click="counClick(10, $event)">Увеличить на 10</button>
    </div>
    <!--Вывод value через еще одну дерективу-->
    <div>
      <input type="text" v-on:input="value = $event.target.value" />
      <p>{{ value }}</p>
    </div>
    <!--Обработчик событий (вызовит функцию onChange описанную в methods)-->
    <div>
      <input type="text" v-on:change="onChange" />
    </div>
    <!--Зададим value по-умолчанию данные подставяться из test объекта data-->
    <div>
      <input type="text" v-bind:value="test" />
    </div>
    <!--Показываем/скрываем элемент по условию-->
    <div>
      <p v-if="showName">Текст текст текст</p>
      <!--Показываем/скрываем элемент по дерективе v-else(если она нужна то она должна идти обязательно после дерективы v-if)-->
      <p v-else>Name is hidden</p>
    </div>
    <!--Изменение класса элемента по условию из state-->
    <div>
      <p @:click="isActive" :class="{'red': isActive, 'green': !isActive}">Text text text</p>
    </div>
    <!--Показываем/скрываеи элемент по условию (разница в том, что он будет именно скрыт, а не удален)-->
    <div>
      <p v-show="showName">Текст текст текст</p>
      <!--Кнопка которая изменяет state showName на прямую (без вызова функции)-->
      <button v-on:click="showName = !showName">Toggle</button>
      <!--Кнопка которая изменяет state showName через вызов функции onClickBtn описанный в объекте methods-->
      <button v-on:click="onClickBtn">Toggle state</button>
    </div>
    <!--С помощью метода computed будем следить за input firstName и lastName, а дальше вызов функции fullName-->
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" v-model="lastName" />
      <p>{{ fullName }}</p>
    </div>
    <!--Вывод данных с помощью цикла ( в данном случае массив fruts)-->
    <div>
      <ul>
        <li v-for="(frut, index) in fruts" :key="index">
          {{ frut }}
        </li>
      </ul>
      <!--Добавление данных в массив-->
      <button v-on:click="addFrut">Add Frut</button>
    </div>
    <!--Вывод данных из объекта info-->
    <div>
      <ul>
          <li v-for="(value, key, i) in info" :key="i">
            <p>
              <span>{{ key }}:</span>
              {{ value }}
            </p>
          </li>
        </ul>
    </div>
    <!--Вывод телефона в консоль, а также валидация телефона на предмет ввода только цифр-->
    <div>
      <input type="text" v-model="phone" />
    </div>
    <!--Работа с формами Radio input по клику на которую изменяем div (divClass объявили в объекте data)-->
    <div>
      <label>Info</label>
      <input type="radio" value="info" v-model="divClass" />
      <label>Warning</label>
      <input type="radio" value="warning" v-model="divClass" />
      <!-- Добавим класс данному div исходя что вернет divClass (divClassName - это функция описанная в объекте computed ) -->
      <div class="alert" :class="divClassName">
        {{ divClass }}
      </div>
    </div>
    <!--Работа с формами Checkbox input - исходя из возвращенного состояния будут применяться классы к div-->
    <div>
      <div v-for="(value, name, index) in flags" :key="index">
        <!--Перебор объекта flags и выведим input столько раз сколько элементов в массиве-->
        <input type="checkbox" v-model="flags[name]" />
        {{ name }}
      </div>
      <div :class="flags">
        <!--В класс будет приходить значение flags - которое соотвествует значению которое указано в объекте flags (описанное в data)-->
        Style div checkbox
      </div>
    </div>
    <!--Работа с инлайн стилями (стили будут приходить из value поля ввода input)-->
    <div v-for="(value, name, index) in properties" :key="index">
      <!--Перебор объекта properties и выведим input столько раз сколько элементов в объекте-->
      <input type="text" v-model="properties[name]" />
      <p>{{ name }}</p>
      <!--В style будет приходить значение из properties которое объявлено в массиве data и в которое подставиться значение из input-->
      <p :style="properties">Text style v-model</p>
    </div>
    <!--Обработка событий на элементах input (когда input-ов много и нужно повесить обрабочик на каждый input)-->
    <div v-for="(item, index) in inputForm" :key="index">
      <label>{{ item.name }}</label>
      <input
        type="text"
        :value="item.value"
        @input="onInput(index, $event.target.value)"
      />
    </div>
    <!--Ссылка на элемент с помощью ref-->
    <button ref="btn">Test button</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      count: 0,
      counter: 0,
      counter2: 0,
      message: "vue test",
      name: "",
      url: "http://google.com",
      value: "",
      isActive: false,
      test: "test value",
      showName: false,
      firstName: "",
      lastName: "",
      phone: "",
      divClass: "",
      flags: {
        "div-border": false,
        "div-hover": false
      },
      properties: {
        color: "inherit",
        backgroundColor: "none"
      },
      inputForm: [
        {
          name: "Name",
          value: ""
        },
        {
          name: "Phone",
          value: ""
        },
        {
          name: "Email",
          value: ""
        }
      ],
      randomNumber: [
        {
          min: 2,
          max: 10
        },
        {
          min: 5,
          max: 16
        }
      ],
      fruts: ["apple", "orange", "meal"],
      info: {
        name: "Artem",
        email: "Artem2503@yandex.ru"
      }
    };
  },
  //Методы - это функции
  methods: {
    riseCounter() {
      this.counter++
    },
    onChange() {
      alert("!!!!!!");
    },
    onHover(event) {
      event.target.style.color = "red"
    },
    onClickBtn() {
      this.showName = !this.showName;
    },
    counClick(num, event) {
      this.counter2 += num;
      if(num === 5) {
        event.target.style.color = "red"
      }
      if(num === 10) {
        event.target.style.color = "green"
      }
    },
    addFrut() {
      this.fruts.push("new frut");
    },
    onInput(index, value) {
      var data = value
      console.log(data)
    },
  },
  //Хуки
  beforeCreate() {
    console.log("beforeCreate"); //Отработает первым
  },
  created() {
    console.log("created"); //Отработает вторым
  },
  beforeMount() {
    console.log("beforeMount"); //Отработает третьим после построение DOM
  },
  mounted() {
    console.log("mounted"); //Отработает четвертым
  },
  beforeUpdate() {
    let pattern = /^[0-9]*$/; //Паттерн что можно вводить только цифры в поле
    let patternStr = /[^0-9]/g; //Паттерн что если в поле введено не цифра удалить этот символ
    if (!pattern.test(this.phone)) {
      this.phone = this.phone.replace(patternStr, "");
    }
    console.log("beforeUpdate"); //Отрабатывает каждый раз когда изменяеться state
  },
  update() {
    console.log("update"); //Отрабатывает каждый раз когда изменяеться state
  },
  //Метод computed следит за изменениями state и отрабатывает каждый раз когда изменяеться state
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    //Данный метод будет проставлять класс элементу имя которого приходит из divClass (divClass - получает значение value на элементе input)
    divClassName() {
      return ["alert-" + this.divClass, "my-" + this.divClass];
    }
  }
};


//По ссылке к кнопке и изменили текст
//$refs.btn.innerText = "Изменили текст на кнопке"

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    border: 1px solid green;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
  }
  p {
    font-size: 18px;
  }
  input {
    border: 1px solid silver;
    padding: 10px;
    border-radius: 5px;
    display: block;
    margin-top: 10px;
  }
  button {
    background: goldenrod;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
  }
  .wrapper {
    max-width: 1400px;
    margin: auto;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
