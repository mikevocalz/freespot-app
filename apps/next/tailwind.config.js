const { theme } = require('app/design/tailwind/theme')
const path = require('path')
const modulePath = require.resolve('sidcn/package.json')
const packageDirectory = path.dirname(modulePath)

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'app/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    `${packageDirectory}/src/**/*.{js,jsx,ts,tsx}`,
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  theme: {
    ...theme,
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded'],
  },
}
