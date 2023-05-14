# Tarot API 🔮

> Project is under development, currently working right now!

Tarot API provides information parsed from AE Waite's The Pictorial Key to the Tarot. This was created using ExpressJS and Nodejs.

*Author: @yunkhngn*

## Quick start

```javascript
fetch("https://tarotapi.vercel.app/api/")
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

## Documentation

| GET path                      | Result                                  | Params                                                                                                          |
| :---------------------------- | --------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `/api/` or `/api/cards` | return all cards                        |                                                                                                                 |
| `/api/cards/:name`   | return card with specified `name` | `'/the-magician'`,`'/the-fool'`... |
| `/api/cards/:name/:search/`        | search fields of one cards                        | `/the-magician/desc`                                                              |
| `/api/random`        | get 3 random card                     |                                                                                  |

**JSON format:**
```json
{
  "type":"Type majors or minors",
  "slug":"Slug",
  "name_short":"Short name",
  "name":"Name",
  "value":"Card index (string)",
  "value_int": "Card index (number)",
  "meaning_up": "Meaning up.",
  "meaning_rev": "Meaning reverse.",
  "desc": "Descriptions"
}
```

## Local development

1. Clone this repository and install dependencies locally.

```sh
git clone https://github.com/ekelen/tarot-api.git
```

2. Then
```sh
cd tarot-api

cd api

yarn install
#or npm install

node index.js
```
