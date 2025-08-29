<!-- <script setup lang="ts">
import voice from "./components/voice.vue";
import { Editor } from "@tiptap/vue-3";

const props = defineProps<{
  editor: Editor;
}>();
</script>

<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <img
          alt="Vue logo"
          src="http://www.sarah.br/media/3462/logo_header.png" />
      </div>
      <div class="col-12"></div>
    </div>
    <voice :editor="editor"></voice>
    <div key="row" class="row q-col-gutter-sm justify-center q-my-md">
      <div key="col" class="col-12"></div>
    </div>
  </div>
</template> -->
<script setup lang="ts">
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Menu from "./components/menu.vue"; // Corrigido para Menu com M maiúsculo
import { onMounted, ref } from "vue";

const editor = ref<Editor | null>(null);

onMounted(() => {
  editor.value = new Editor({
    content: "<p>Comece a editar...</p>",
    extensions: [StarterKit],
  });
});
</script>

<template>
  <div id="app" class="container">
    <div v-if="editor">
      <Menu :editor="editor"></Menu>
      <editor-content :editor="editor" />
    </div>
  </div>
</template>
