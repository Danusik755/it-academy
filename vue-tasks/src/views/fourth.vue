<script setup>
import { ref } from 'vue'


let wor = ref(    [])

function pof (){
  let i = 0
  while (i !== 4) {

    i = +prompt('1-красный блок,2-синий блок,3-зеленый блок,4-стоп игра');
    wor.value.push(i)

  }

}

pof ()
</script>

<template>
   <div v-for="block in wor" :class="{ 'block1': block === 1, 'block2': block === 2, 'block3': block === 3 }">

   </div>
</template>

<style scoped>
.block1 {
display: inline-flex;



background: red;
  width: 150px;
  height: 150px;
}
.block2{
  display: inline-flex;
  background: green;
  width: 150px;
  height: 150px;
}
.block3 {
  display: inline-flex;
  background: blue;
  width: 150px;
  height: 150px;
}

</style>