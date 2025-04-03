<script setup>
import { ref } from 'vue';

let search = ref('');
let search2 = ref('');
let names = ref ([])
let towns = ref ([])



async function addNames() {
  names.value.push(search.value);
  search.value = '';
}



async function addTowns() {
towns.value.push(search2.value);
search2.value ='';

}
</script>

<template>
<div class="blocks">
  <div class="names">
    <h2 class="name">имена</h2>
    <input
        v-model="search"
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
    <input
        v-model="search2"
        class="int"
    >
    <button
        @click="addTowns"
        class="butt">Добавить</button>
    <h2>Место для добавления</h2>
    <ul>
      <li class="clo1" v-for="name in towns">{{ name }}
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

.clo1 {
  color: forestgreen;
  text-decoration: underline;
}

.clo {
  color: red;
  text-decoration: underline;
}
</style>