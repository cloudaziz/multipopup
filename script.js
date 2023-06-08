const animals = [
  { name: 'karim', species: 'rabbit' },
  { name: 'rahim', species: 'dog' },
  { name: 'ashik', species: 'dog' },
  { name: 'jabbar', species: 'rabbit' },
];

let dogs = animals.filter((animal) => {
  return animal.species == 'dog';
});
console.log(dogs);
