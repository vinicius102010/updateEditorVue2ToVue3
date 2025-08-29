<script setup lang="ts">
import { Editor } from "@tiptap/vue-3";
import Button from "./ui/button/Button.vue";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { SpeechToText } from "@/composables/voice";
import { Mic } from "lucide-vue-next";
import { onMounted, ref } from "vue";

const props = defineProps<{
  editor: Editor;
}>();
const recognizing = ref(false);
const final_transcript = ref("");
const interim_transcript = ref("");
const speechToText = ref<SpeechToText | null>(null);
const start = (ev?: SpeechRecognitionError): void => {
  if (recognizing.value) {
    recognizing.value = false;
    speechToText.value?.stop();
    if (ev) console.error("Error: ", ev);
    return;
  }
  speechToText.value?.start();
};
const init = () => {
  speechToText.value = new SpeechToText({
    onstart: () => (recognizing.value = true),
    onend: () => (recognizing.value = false),
    onerror: (ev) => start(ev),
    onresult: (event) => {
      interim_transcript.value = "";
      final_transcript.value = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final_transcript.value += event.results[i][0].transcript;
        } else {
          interim_transcript.value += event.results[i][0].transcript;
        }
      }
      props.editor.chain().focus().insertContent(final_transcript.value).run();
    },
    interimResults: true,
    continuous: true,
  });
};
onMounted(() => {
  init();
});
</script>

<template>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <Button variant="outline" size="icon"> <Mic class="w-4 h-4"></Mic></Button>
    <TooltipContent>Entrada utilizando áudio</TooltipContent>
  </Tooltip>
</template>
