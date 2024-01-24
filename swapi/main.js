const button = document.querySelector('#get-residents');
const baseUrl = 'http://swapi.dev/api/planets/?search=Alderaan';

function logButtonClicked() {
//   alert('button clicked');
  axios.get(`${baseUrl}`)
  .then(response => {
    const residents = response.data.results[0].residents;
    residents.forEach(resident => {
      axios.get(resident)
        .then(response => {
          const name = response.data.name;
          const h2 = document.createElement('h2');
          h2.textContent = name;
          document.body.appendChild(h2);
        });
    });
  });
};

button.addEventListener('click', logButtonClicked);

