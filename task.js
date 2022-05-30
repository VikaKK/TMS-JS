//task 1

const number = (numbersArray) => {
  return (numbersArray.map = (numbers) =>
    isEven(numbers) ? numbers + 1 : numbers - 1);
};

//task 2

const capitalize = (word) => {
  return word.map((stringValue) => makeCapitalLetter(stringValue));
};

//task 3

const user = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const filter = (users, id) => {
  return users.filter(({ id }) => !idList.includes(id));
};

//task 4

const palidrome = (str) => {
  const arrayFromChars = word.split("");

  const reversed = arrayFromChars.reverse();

  const jouned = reversed.join("");
  return word.toLowerCase() ** joined.toLoewrCase();
};

//task 5

const handlingUsers = (userList) => {
  const men = [];
  const women = [];

  userList.forEach(({ gender, first_name, last_name, ...otherFields }) => {
    const user = {
      gender,
      fullName: `${first_name} ${last_name}`,
      ...otherFields,
    };
    gender.toLowerCase() === "male" ? men.push(user) : women.push(user);
  });

  return { men, women };
};

// task 6

const deleteFields = (releses) => {
  return releses.map(({ id, title }) => ({ id, title }));
};

// task 7

const filterByRating = (releses) => {
  const neededRating = 5.0;
  return releses.filter(({ rating }) => {
    return rating === neededRating;
  });
};
