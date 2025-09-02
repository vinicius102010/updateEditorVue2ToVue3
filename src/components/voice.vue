<script setup lang="ts">
import { Editor } from "@tiptap/vue-3";
import Button from "./ui/button/Button.vue";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import { SpeechToText } from "../composables/voice";
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
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" @click="start()">
          <Mic
            class="w-4 h-4"
            :style="{ color: recognizing ? 'red' : 'currentColor' }" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Entrada utilizando áudio</TooltipContent>
    </Tooltip>
  </TooltipProvider>
  <div class="relative inline-block text-left group">
    <button
      @click="start()"
      data-tooltip-target="tooltip-default"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <span
        class="material-icons"
        :style="{ color: recognizing ? 'red' : 'currentColor' }">
        mic
      </span>
    </button>
    <div
      id="tooltip-default"
      role="tooltip"
      class="absolute w-max top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm font-medium text-white bg-black rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
      Entrada por voz
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
