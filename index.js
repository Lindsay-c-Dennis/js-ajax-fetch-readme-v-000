const app = "I don't do much.";

const token = 'token'
fetch('https://api.github.com/lindsay-c-dennis/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));