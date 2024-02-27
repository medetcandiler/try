const faker_glb = require("@faker-js/faker")
const faker = faker_glb.fakerTR

function createRandomEmployee() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    avatar: faker.image.urlLoremFlickr({ category: "people" }),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    votes: faker.number.int({ min: 0, max: 30 }),
  };
}

const createRandomEmployees = () =>
  faker.helpers.multiple(createRandomEmployee, {
    count: 20,
  });

module.exports = {
  employees: createRandomEmployees()
};