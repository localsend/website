declare module 'qrcode.vue' {
    import { DefineComponent } from 'vue'
    const QrcodeVue: DefineComponent<{
      value: string
      size?: number
      level?: string
      margin?: number
      render?: string
      background?: string
      foreground?: string
    }>
    export default QrcodeVue
  }