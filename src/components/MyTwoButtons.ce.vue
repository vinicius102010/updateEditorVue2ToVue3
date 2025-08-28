<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  countDefault: {
    type: String,
    default: "1000",
  },
});

const count = ref(parseInt(props.countDefault));
const count2 = ref(0);

function clicked() {
  const delta: number = 2;
  count2.value += delta;
  console.log(`Chamado o método clicked(), novo valor: ${count2.value}`);
}
</script>

<template>
  <h1>Web Component</h1>
  <div><slot name="prefix" /></div>
  <br />
  <br />
  <text>Começa de count-default, incrementa com count++</text>
  <br />
  <button type="button" @click="count++">+1 por clique {{ count }}</button>

  <br />
  <br />
  <text>Incrementa com o método clicked()</text>
  <br />
  <button type="button" @click="clicked">+2 por clique {{ count2 }}</button>
</template>

<style>
/* Os estilos permanecem os mesmos */
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
