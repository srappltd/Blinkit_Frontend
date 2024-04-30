import {VitePWA} from 'vite-plugin-pwa'

export default VitePWA({
    registerType:"autoUpdate",
includeAssets:['favicon.ico', 'apple-touch-icon.png', 'https://blinkit.com/48167d399a1881b810d7.png'],
manifest:{
  name:"Blinkit Shoping",
  short_name:"Blinkit",
  theme_color:"#ffffff",
  orientation:"portrait",
  icons:[
    {
      src: 'https://blinkit.com/48167d399a1881b810d7.png',
      sizes: '64x64',
      type: 'image/png'
    },
    {
      src: 'https://blinkit.com/48167d399a1881b810d7.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: 'https://blinkit.com/48167d399a1881b810d7.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any'
    },
    {
      src: 'https://blinkit.com/48167d399a1881b810d7.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable'
    },
    
  ]
}
  })