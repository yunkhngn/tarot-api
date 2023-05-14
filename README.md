# Tarot API 🔮

> Project is currently under development

Tarot API provides information parsed from AE Waite's The Pictorial Key to the Tarot. This was created using ExpressJS and Nodejs

*Author: @yunkhngn*

## Quick start

```javascript
fetch("https://tarot-api.vercel.app/api/")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    //extract data
  })
  .catch(function (error) {
    // handle what went wrong
  });
```

### Local development

1. Clone this repository and install dependencies locally.

```sh
git clone https://github.com/ekelen/tarot-api.git
```

2. Then
```sh
cd tarot-api

yarn install
#or npm install

yarn run dev
```