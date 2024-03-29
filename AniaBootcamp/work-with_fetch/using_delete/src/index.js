// DELETE

fetch('https://my-burger-api.herokuapp.com/burgers/28', {
  method: 'DELETE'
})

.then((response) => response.json())
.then((data) => {
    console.log('success deleted:', data)
  })
.catch((error) => {
  console.error('Error:', error)
})
  

// we don't get a result back because there nothing to get back we just are deleted an object (it is an empty object)
