import { useState, useEffect } from "react";
import "./App.scss";
import "./buttons.scss";
import List from "./List.json";

function App() {
  const [form, setForm] = useState({
    name: "",
    food: "",
    pet: "",
  });
  const [people, setPeople] = useState(List);

  const getPeopleList = (person) => {
    if (person) {
      // if an argument is passed, se tpeople to be people + argument
      setPeople([...people, person]);
    } else {
      // if no arguement is passed its the page loading, so just set it to the list
      setPeople(List);
    }
  };

  //this function keeps state of whatever is in the form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // make an object of the new person
    let newPerson = {
      id: people.length + 1,
      name: form.name,
      food: form.food,
      pet: form.pet,
    };

    // run the function to put this new person in state
    getPeopleList(newPerson);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="form__input"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="food"
          type="text"
          placeholder="Food"
          className="form__input"
          value={form.food}
          onChange={handleChange}
        />
        <input
          name="pet"
          type="text"
          placeholder="Pet"
          className="form__input"
          value={form.pet}
          onChange={handleChange}
        />
        <input
          className="button form__submit"
          type="submit"
          value="Submit"
          id="input-submit"
        />
      </form>
      <div className="people">
        {people.map((person) => {
          return (
            <div className="people__item" key={person.id}>
              <p className="people__item-value">{person.name}</p>
              <p className="people__item-value">{person.food}</p>
              <p className="people__item-value">{person.pet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
