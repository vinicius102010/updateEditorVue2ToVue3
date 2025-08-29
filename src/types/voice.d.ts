export class VoiceOptions {
    onstart: (ev: Event) => any
    onend: (ev: Event) => any
    onerror: (ev: SpeechRecognitionError) => any
    onresult: (ev: SpeechRecognitionEvent) => any
    interimResults: boolean
    continuous: boolean
}


