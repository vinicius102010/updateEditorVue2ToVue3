<script setup lang="ts">
import { computed } from "vue";
import { Editor } from "@tiptap/vue-3";
import Voice from "./voice.vue";
import { Save } from "lucide-vue-next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import Button from "./ui/button/Button.vue";

// Define props with types and default values in a clean, type-safe way
interface Props {
  editor: Editor;
  isDesktop?: boolean;
  enableVoiceRecognition?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDesktop: true,
  enableVoiceRecognition: true,
});

const getIcon = computed(() => {
  if (props.editor?.isActive({ textAlign: "right" }))
    return "format_align_right";
  if (props.editor?.isActive({ textAlign: "left" })) return "format_align_left";
  if (props.editor?.isActive({ textAlign: "justify" }))
    return "format_align_justify";
  return "format_align_center";
});
</script>

<template>
  <div v-if="editor" class="mb-0 shadow-md flex">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            @click="$emit('save', console.log('fon'))">
            <Save class="w-4 h-4"></Save>
          </Button>
        </TooltipTrigger>
        <TooltipContent>CTRL+S</TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <button
      ref="salvar"
      type="button"
      class="menubar__button group relative flex items-center rounded bg-transparent p-1 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      @click="$emit('save')">
      <Save class="h-5 w-5" />
      <span
        class="absolute bottom-full mb-2 hidden w-auto rounded-md bg-gray-800 p-2 text-xs text-white group-hover:block">
        CTRL+S
      </span>
    </button>

    <voice v-if="enableVoiceRecognition" :editor="editor" />
  </div>
</template>
