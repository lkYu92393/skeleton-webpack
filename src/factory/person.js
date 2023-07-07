const personFactory = (inputName, inputAge) => {
    const name = inputName;
    const age = inputAge;
    const getName = () => name;
    const getAge = () => age;
    return { getName, getAge };
}

export default personFactory;