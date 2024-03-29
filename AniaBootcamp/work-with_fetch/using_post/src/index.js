// POST requests
// able to post data to an api
// url = https://my-burger-api.herokuapp.com/burgers

const data = {
    "id": 29,
    "name": "Chichis Burger",
    "restaurant": "Kami Burger",
    "web": "https://www.miam.it/",
    "description": "From the mountains and a rough nature, we hunt and collect our products and cook them with the best Chichi recipe",
    "ingredients": [
      "bun",
      "meat",
      "tomatoes",
        "cheese",
        "onions",
      "mushroom",
      "pesto sauce"
    ],
    "addresses": [
      {
        "addressId": 0,
        "number": "12",
        "line1": "Porta Nameka",
        "line2": "Via Torgnolas",
        "postcode": "25544",
        "country": "Novegito Land"
      }
    ]
  }

fetch('https://my-burger-api.herokuapp.com/burgers', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then((data) => {
        console.log('Success:', data)
    })
    .catch((error) => {
        console.error('Error', error)
    })



