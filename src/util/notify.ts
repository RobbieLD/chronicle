import ChronicleConfig from '@/config'
import { useToast } from 'primevue/usetoast'
export default class Notify {

    private toast

    constructor() {
        this.toast = useToast()
    }

    public show(content: Error | string): void {
        if (content instanceof Error) {
            this.toast.add({ severity: 'error', summary: content.name, detail: content.message, life: ChronicleConfig.ToastLifeSpan })
            // Add the error to the console for debugging purposes 
            console.error(content)
        } else {
            this.toast.add({ severity: 'warn', summary: 'Warning', detail: content, life: ChronicleConfig.ToastLifeSpan })
        }
    }
}
