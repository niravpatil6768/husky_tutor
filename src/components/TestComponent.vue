<template>
    <div>
      <h1>Test Component</h1>
      <p>This is a test component.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestComponent',
    mounted() {
      console.log('TestComponent mounted'); // Intentional linting issue (no-console)
    },
    data() {
      return {
        message: 'Hello World' // Intentional linting issue (trailing comma)
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: red;
  }
  </style>
  