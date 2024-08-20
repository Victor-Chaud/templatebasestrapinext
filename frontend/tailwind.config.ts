module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: {'max':'639px'},
        md: {'min':"640px", 'max':'1023px'},
        mb: {'min':"1024px", 'max':'1280px'},
        lg: {'min':"1281px", 'max':'1920px'},
      },
    },
  },
  plugins: [],
}