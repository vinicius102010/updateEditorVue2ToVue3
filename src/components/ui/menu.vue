<!-- <template>
  <div v-if="editor" class="q-mb-none shadow-1 row">
    <div class="menubar is-hidden text-center col-12">
      <q-btn ref="salvar" flat dense class="menubar__button" icon="save" @click="$emit('save')">
        <q-tooltip>CTRL+S</q-tooltip>
      </q-btn>

      <q-btn
        ref="heading"
        flat
        dense
        class="menubar__button"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        icon="title"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <q-tooltip>Título</q-tooltip>
      </q-btn>
      <!--#region MOBILE  
      <template v-if="!isDesktop">
        <q-btn ref="formatar-mobile" flat no-caps class="menubar__button text-bold" icon="text_format">
          <q-tooltip>Formatar</q-tooltip>
          <q-menu>
            <q-list>
              <q-item
                ref="bold-mobile"
                v-close-popup
                clickable
                :class="{ 'is-active': editor.isActive('bold') }"
                @click="editor.chain().focus().toggleBold().run()"
              >
                <q-item-section avatar><q-icon name="format_bold" /></q-item-section>
                <q-item-section>Negrito</q-item-section>
              </q-item>
              <q-item
                ref="italic-mobile"
                v-close-popup
                clickable
                :class="{ 'is-active': editor.isActive('italic') }"
                @click="editor.chain().focus().toggleItalic().run()"
              >
                <q-item-section avatar><q-icon name="format_italic" /></q-item-section>
                <q-item-section>Itálico</q-item-section>
              </q-item>
              <q-item
                ref="underline-mobile"
                v-close-popup
                clickable
                :class="{ 'is-active': editor.isActive('undeline') }"
                @click="editor.chain().focus().toggleUnderline().run()"
              >
                <q-item-section avatar><q-icon name="format_underlined" /></q-item-section>
                <q-item-section>Sublinhado</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn ref="alinhamento-mobile" flat no-caps class="menubar__button text-bold" :icon="getIcon">
          <q-tooltip> Alinhamento </q-tooltip>
          <q-menu>
            <q-list>
              <q-item
                ref="align-left-mobile"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('left').run()"
              >
                <q-item-section avatar><q-icon name="format_align_left" /></q-item-section>
                <q-item-section>Esquerda</q-item-section>
              </q-item>
              <q-item
                ref="align-right-mobile"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('right').run()"
              >
                <q-item-section avatar><q-icon name="format_align_right" /></q-item-section>
                <q-item-section>Direita</q-item-section>
              </q-item>
              <q-item
                ref="align-center-mobile"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('center').run()"
              >
                <q-item-section avatar><q-icon name="format_align_center" /></q-item-section>
                <q-item-section>Centralizado</q-item-section>
              </q-item>
              <q-item
                ref="align-justify-mobile"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('justify').run()"
              >
                <q-item-section avatar><q-icon name="format_align_justify" /></q-item-section>
                <q-item-section>Justificado</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn ref="listas-mobile" flat no-caps class="menubar__button text-bold" icon="format_list_bulleted">
          <q-tooltip>Listas</q-tooltip>
          <q-menu>
            <q-list>
              <q-item
                ref="bulletlList-mobile"
                v-close-popup
                clickable
                :class="{ 'is-active': editor.isActive('bulletList') }"
                @click="editor.chain().focus().toggleBulletList().run()"
              >
                <q-item-section avatar>
                  <q-icon name="format_list_bulleted" />
                </q-item-section>
                <q-item-section>Lista</q-item-section>
              </q-item>
              <q-item
                ref="listItem-mobile"
                v-close-popup
                clickable
                :class="{ 'is-active': editor.isActive('listItem') }"
                @click="editor.chain().focus().toggleOrderedList().run()"
              >
                <q-item-section avatar>
                  <q-icon name="format_list_numbered" />
                </q-item-section>
                <q-item-section>Lista numérica</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </template>
      <!--#endregion  

      <!--#region DESKTOP  
      <template v-else>
        <q-btn
          ref="undo"
          flat
          dense
          class="menubar__button q-ml-lg"
          icon="undo"
          @click="editor.chain().focus().undo().run()"
        >
          <q-tooltip>CTRL+Z</q-tooltip>
        </q-btn>
        <q-btn
          ref="redo"
          flat
          dense
          class="menubar__button q-mr-lg"
          icon="redo"
          @click="editor.chain().focus().redo().run()"
        >
          <q-tooltip>CTRL+SHIFT+Z</q-tooltip>
        </q-btn>

        <q-btn
          ref="italic"
          flat
          dense
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('italic') }"
          icon="format_italic"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <q-tooltip>CTRL+I</q-tooltip>
        </q-btn>
        <q-btn
          ref="underline"
          flat
          dense
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('underline') }"
          icon="format_underlined"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <q-tooltip>CTRL+U</q-tooltip>
        </q-btn>
        <q-btn
          ref="bold"
          flat
          dense
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('bold') }"
          icon="format_bold"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <q-tooltip>CTRL+B</q-tooltip>
        </q-btn>
        <q-btn ref="alinhamento" flat no-caps class="menubar__button text-bold" :icon="getIcon">
          <q-tooltip>Alinhamento</q-tooltip>
          <q-menu>
            <q-list>
              <q-item
                ref="align-left"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('left').run()"
              >
                <q-item-section avatar><q-icon name="format_align_left" /></q-item-section>
                <q-item-section>Esquerda</q-item-section>
              </q-item>
              <q-item
                ref="align-right"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('right').run()"
              >
                <q-item-section avatar><q-icon name="format_align_right" /></q-item-section>
                <q-item-section>Direita</q-item-section>
              </q-item>
              <q-item
                ref="align-center"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('center').run()"
              >
                <q-item-section avatar><q-icon name="format_align_center" /></q-item-section>
                <q-item-section>Centralizado</q-item-section>
              </q-item>
              <q-item
                ref="align-justify"
                v-close-popup
                clickable
                @click="editor.chain().focus().setTextAlign('justify').run()"
              >
                <q-item-section avatar><q-icon name="format_align_justify" /></q-item-section>
                <q-item-section>Justificado</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          ref="bulletList"
          flat
          dense
          class="menubar__button"
          icon="format_list_bulleted"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <q-tooltip>Lista</q-tooltip>
        </q-btn>

        <q-btn
          ref="orderedList"
          flat
          dense
          class="menubar__button"
          icon="format_list_numbered"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <q-tooltip>Lista númerica</q-tooltip>
        </q-btn>

        <slot></slot>
      </template>
      <!--#endregion  

      <voice v-if="enableVoiceRecognition" :editor="editor" />

      <q-btn ref="ajuda" flat dense class="menubar__button" color="green" icon="help" @click="$emit('help')">
        <q-tooltip>Ajuda</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Editor } from '@tiptap/vue-2'
import Voice from './voice.vue'
import Vue from 'vue'

/**
 * Necessário pois a API do Vue Class Component não possui provider para props
 * Dessa forma o typescript não lança exceção de variável não iniciada
 * Ver: https://class-component.vuejs.org/guide/props-definition.html
 *
 * Obs: Não usar bang(!) pois torna a prop não reativa
 */
const EditorProps = Vue.extend({
  props: {
    editor: Editor,
    isDesktop: {
      default: true,
      type: Boolean
    },
    enableVoiceRecognition: {
      default: true,
      type: Boolean
    }
  }
})

@Component({
  components: { Voice },
  name: 'SMenu'
})
class EditorMenu extends EditorProps {
  get getIcon() {
    if (this.editor.isActive({ textAlign: 'right' })) return 'format_align_right'
    else if (this.editor.isActive({ textAlign: 'left' })) return 'format_align_left'
    else if (this.editor.isActive({ textAlign: 'justify' })) return 'format_align_justify'
    else return 'format_align_center'
  }
}

export default EditorMenu
</script>

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

body.mobile .menubar__button,
body.mobile .q-btn__wrapper {
  padding: 0px 5px;
  margin: 0px;
}

.menubar__button:hover {
  background-color: #3333335e;
}

.menubar__button.is-active {
  background-color: #3333335e;
}
</style> -->
