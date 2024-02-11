/** @type {import('tailwindcss').Config} */

const { theme } = require('app/design/tailwind/theme')
const path = require('path')
const modulePath = require.resolve('sidcn/package.json')
const packageDirectory = path.dirname(modulePath)

module.exports = {
  content: [
    './index.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    `${packageDirectory}/src/**/*.{js,jsx,ts,tsx}`,
  ],
  presets: [require('nativewind/preset')],
  theme: {
    ...theme,
  },
  plugins: [],
}
