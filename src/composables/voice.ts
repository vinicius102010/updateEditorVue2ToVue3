import { VoiceOptions } from "@/types";
export class SpeechToText {
    options!: VoiceOptions
    recognition!: SpeechRecognition
    constructor({ onstart, onend, onerror, onresult, interimResults, continuous }: Partial<VoiceOptions>) {
        this.options = new VoiceOptions()
        this.options.onstart =
            onstart ??
            (() => {
                return
            })
        this.options.onend =
            onend ??
            (() => {
                return
            })
        this.options.onerror =
            onerror ??
            ((error) => {
                console.error('Erro no reconhecimento', error)
            })
        this.options.onresult =
            onresult ??
            ((result) => {
                // console.log('Resultado:', result)
            })
        this.options.interimResults = interimResults ?? true
        this.options.continuous = continuous ?? true
        this.checkApi()
    }

    checkApi() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        if (!SpeechRecognition) {
            console.error(
                'O reconhecimento de voz não está habilitado para seu navegador. Use Chrome, Safari ou Samsung Internet'
            )
            return
        }

        this.recognition = new SpeechRecognition()
        this.recognition.lang = 'pt-BR'
        this.recognition.interimResults = this.options.interimResults
        this.recognition.continuous = this.options.continuous
        this.recognition.onstart = this.options.onstart
        this.recognition.onend = this.options.onend

        this.recognition.onerror = this.options.onerror
        this.recognition.onresult = this.options.onresult
    }

    start() {
        this.recognition.start()
    }
    stop() {
        this.recognition.stop()
    }
}