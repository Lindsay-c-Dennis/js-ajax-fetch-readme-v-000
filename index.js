const app = "I don't do much.";

const token = 'a3c07ffd26ec990a9df9fc5788d67d3f5067a387'
fetch('https://api.github.com/lindsay-c-dennis/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));