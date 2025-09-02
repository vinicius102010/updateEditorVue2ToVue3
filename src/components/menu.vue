<script setup lang="ts">
import { computed } from "vue";
import { Editor } from "@tiptap/vue-3";
import Voice from "./voice.vue";
import { Save, Type, Baseline, Bold, Italic, Underline } from "lucide-vue-next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Button from "./ui/button/Button.vue";
import DropdownMenuGroup from "./ui/dropdown-menu/DropdownMenuGroup.vue";

interface Props {
  editor: Editor;
  isDesktop?: boolean;
  enableVoiceRecognition?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDesktop: false,
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
    <div class="menubar is-hidden text-center col-12">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="icon"
              class="menubar_button"
              @click="$emit('save')">
              <Save class="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>CTRL+S</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              class="menubar_button"
              size="icon"
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
              <Type class="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Título</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <!--#region MOBILE -->
      <template v-if="!isDesktop">
        <TooltipProvider :delay-duration="100">
          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger as-child>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="font-bold">
                    <Baseline class="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent> Formatar </TooltipContent>
              <DropdownMenuContent class="w-56" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'bg-accent': editor.isActive('bold') }">
                    <Bold class="mr-2 h-4 w-4" />
                    <span>Negrito</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'bg-accent': editor.isActive('italic') }">
                    <Italic class="mr-2 h-4 w-4" />
                    <span>Itálico</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    @click="editor.chain().focus().toggleUnderline().run()"
                    :class="{ 'bg-accent': editor.isActive('underline') }">
                    <Underline class="mr-2 h-4 w-4" />
                    <span>Sublinhado</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </Tooltip>
        </TooltipProvider>
      </template>
      <!--#endregion -->
      <voice v-if="enableVoiceRecognition" :editor="editor" />
    </div>
  </div>
</template>

<style>
.menubar__button {
  display: inline-flex;
  background: transparent;
  border: 0;
  padding: 0.2rem 0.3rem;
  margin-right: 0.1rem;
  border-radius: 3px;
  cursor: pointer;
}
</style>
