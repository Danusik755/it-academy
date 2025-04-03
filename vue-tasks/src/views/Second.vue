<script setup>
import { ref } from 'vue';

let search = ref('');
let search3 = ref('')
let search2 = ref('');
let names = ref ([])
let towns = ref ([])



async function addNames() {
  for (let i = 0; i < search3.value; i = i + 1) {
    names.value.push(search.value);
  }
  search.value = '';
}



async function addTowns() {
  for (let i = 0; i < search3.value; i = i + 1) {
    towns.value.push(search2.value);
  }

  search2.value ='';

}
</script>

<template>
  <div class="blocks">
    <div class="names">
      <h2 class="name">Имена</h2>
      <p>укажите имя</p>
      <input
          v-model="search"
          class="int">

      <p>сколько добавить?</p>
      <input
          v-model="search3"
          class="int">
      <button
          @click="addNames"
          class="butt">Добавить</button>

      <h2>Место для добавления</h2>
      <ul>
        <li class="clo" v-for="name in names">{{ name }}
        </li>
      </ul>
    </div>

    <div class="cities">
      <h2>Города</h2>
      <p> Укажите город</p>
      <input
          v-model="search2"
          class="int"
      >

      <p>Сколько добавить?</p>
      <input
          v-model="search3"
          class="int"
      >
      <button
          @click="addTowns"
          class="butt">Добавить</button>
      <h2>Место для добавления</h2>
      <ul>
        <li class="clo1" v-for="town in towns">{{ town }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.blocks {
  display: flex;
}

.names, .cities {
  width: 50%;
  padding-top: 3px;
  padding-bottom: 2px;

}
.int {
  width: 200px;
}
.butt {
  display: flex;
}
.clo1 {
  color: forestgreen;
  text-decoration: underline;
}

.clo {
  color: red;
  text-decoration: underline;
}

</style>