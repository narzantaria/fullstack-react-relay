const { v4: uuidv4 } = require('uuid');
const { fromGlobalId } = require('graphql-relay');

let data = {
  heroes: [
    {
      id: uuidv4(),
      name: 'Sandro',
      date: '2020-02-24T21:00:00.000Z'
    },
    {
      id: uuidv4(),
      name: 'Finneas',
      date: '2020-02-24T21:00:00.000Z'
    },
    {
      id: uuidv4(),
      name: 'Fargo',
      date: '2020-02-24T21:00:00.000Z'
    },
  ]
};

let { heroes } = data;

module.exports = {
  addHero: hero => {
    return new Promise((resolve) => {
      const newHero = {
        id: uuidv4(),
        ...hero
      }
      heroes.push(newHero);
      resolve(newHero);
    });
  },
  getHeroes: () => {
    return new Promise((resolve) => {
      resolve(heroes);
    });
  },
  getHero: id => {
    const foundIndex = heroes.findIndex(x => x.id == id);
    return new Promise((resolve) => {
      resolve(heroes[foundIndex]);
    });
  },
  updHero: hero => {
    const { id: productId } = fromGlobalId(hero.id);
    const foundIndex = heroes.findIndex(x => x.id == productId);
    heroes[foundIndex].name = hero.name;
    heroes[foundIndex].date = hero.date;
    return new Promise((resolve) => {
      resolve({});
    });
  },
  removeHero: id => {
    heroes = heroes.filter(x => x.id != id);
    return new Promise((resolve) => {
      resolve({
        deletedId: id,
        deleted: true
      });
    });
  },
  getHeroesNumber: () => {
    return new Promise((resolve) => {
      resolve(heroes.length);
    });
  }
};