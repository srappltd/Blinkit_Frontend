import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa';
// import VitePWA from './src/Utils/WebAppSetupPWA'
// import { generateSW } from 'workbox-build';
// import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  //   VitePWA({
  //     registerType:"autoUpdate",
  // includeAssets:['favicon.ico', 'apple-touch-icon.png', 'https://blinkit.com/48167d399a1881b810d7.png'],
  // manifest:{
  //   name:"Blinkit Shoping",
  //   short_name:"Blinkit",
  //   theme_color:"#ffffff",
  //   orientation:"portrait",
  //   icons:[
  //     {
  //       src: 'https://blinkit.com/48167d399a1881b810d7.png',
  //       sizes: '64x64',
  //       type: 'image/png'
  //     },
  //     {
  //       src: 'https://blinkit.com/48167d399a1881b810d7.png',
  //       sizes: '192x192',
  //       type: 'image/png'
  //     },
  //     {
  //       src: 'https://blinkit.com/48167d399a1881b810d7.png',
  //       sizes: '512x512',
  //       type: 'image/png',
  //       purpose: 'any'
  //     },
  //     {
  //       src: 'https://blinkit.com/48167d399a1881b810d7.png',
  //       sizes: '512x512',
  //       type: 'image/png',
  //       purpose: 'maskable'
  //     },
      
  //   ]
  // }
  //   })

  ],
})


// generateSW({
//   swDest: 'dist', // Output service worker file path
//   globDirectory: 'dist', // Directory to search for files to be precached
//   globPatterns: ['**/*.{js,css,html,png,jpg,json}'], // Patterns to match files to be precached
// });