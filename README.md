# Tarot API 🔮

> Currently working right now!

### Tarot API provides information parsed from AE Waite's The Pictorial Key to the Tarot. This was created using ExpressJS and Nodejs.

*Author: @yunkhngn*

<img src="https://media.allure.com/photos/60fed2b43a2765b3b97ee23c/16:9/w_2560%2Cc_limit/wheel%2520of%2520fortune%2520tarot%2520card.jpg" style="border-radius:5px"/>

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

| GET path | Result| Params|
| :------------ | ---------- | :----------- |
| `/api/` or `/api/cards` | return all cards| |
| `/api/cards/:name` | return card with specified `name` | `'/the-magician'`,`'/the-fool'`... |
| `/api/cards/:name/:search/`| search fields of one cards|`/the-magician/desc`|
| `/api/random`| get 3 random card| |
| `/api/answer`| get random advices or answer for specific questions|  |

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
git clone https://github.com/yunkhngn/tarot-api.git
```

2. Then
```sh
cd tarot-api

cd api

yarn install
#or npm install

node index.js
```
3. Install nodemon (optional for hot reload)
```sh
yarn add nodemon

nodemon index.js
```

## License & contributions

Contributions to Repository are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make changes and commit them to your branch
4. Submit a pull request to the main repository.

Tarot API's Repository is licensed under the GNU License. See LICENSE for more information.

