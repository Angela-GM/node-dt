// Un Factory Function es una funcion que crea una funcion
// const { getUuid, getAge } = require('../plugins');

interface BuildMakerPersonOptions {
    getUuid: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUuid, getAge }: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUuid(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = {name: 'John', birthdate: '1982-12-01'}
// const john = buildPerson(obj)
// console.log('JOHN', john)


