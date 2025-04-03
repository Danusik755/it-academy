<script setup>
import { ref } from 'vue'

let re = ref('')
let ri = ref('')
let ry = ref('')
let rt = ref('')
let rr = ref('')
let rw = ref('')
let rb = ref([])
let rn = ref('')

let weer= ref(    [])




function click1 () {
  for (let i = 0; i < 5; i = i + 1) {
    re.value = re.value + i
  }
}
function click2 () {
  for (let i = 1; i < 6; i = i + 1) {
    ri.value = ri.value + i
  }
}
function click3 () {
  for (let i = 0; i < 10; i = i + 1) {
    ry.value = ry.value + i
  }
}
function click4 () {
  for (let i = 1; i < 11; i = i + 1) {
    rt.value = rt.value + i
  }
}
function click5 () {
  for (let i = 1; i < 21; i = i + 2) {
    rr.value = rr.value + i
  }
}
function click6 () {
  for (let i = 1; i < 27  ; i = i + 3) {
    rw.value = rw.value + i
  }
}
function click7 () {
  for (let i = 1; i < 21  ; i = i + 1) {
    rb.value.push (i)
  }
}



</script>

<template>
  <div class="cont1">
<button @click="click1">Создать 5 цифр (начиная с 0)</button>
    {{ re }}
  </div>
  <div class="cont2">
    <button @click="click2">Создать 5 цифр (начиная с 1)</button>
    {{ ri }}
  </div>
  <div class="cont3">
<button @click="click3">Создать 10 цифр (начиная с 0)</button>
    {{ ry }}
  </div>
  <div class="cont4">
<button @click="click4">Создать 10 цифр (начиная с 1)</button>
    {{ rt }}
  </div>
  <div class="cont5">
<button @click="click5">Создать 10 цифр (начиная с 0 с шагом 1)</button>
    {{ rr }}
  </div>
  <div class="cont5">
    <button @click="click6" >Создать 10 цифр (начиная с 0 с шагом 2)</button>
    {{ rw }}
  </div>
  <div class="cont6">
    <button @click="click7" >Создать 20 цифр (начиная с 1, каждая четная красная)</button>
    <span v-for="i in rb"  :class="{ 'red': i % 2 === 0 }" style="margin-left: 4px;">{{ i }}</span>
>
  </div>

</template>

<style scoped>
.cont1 {
  border: 10px;
}
.red {
  color:red;
}
</style>