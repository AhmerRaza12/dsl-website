/** @type {import('tailwindcss').Config} */
const moduleExports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'about-us': "url('https://images.unsplash.com/photo-1548695607-9c73430ba065?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default moduleExports