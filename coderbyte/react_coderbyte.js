const data = props.data;

  const nameList = data.map((person) => <li>{person.name}</li>);

  const ageList = data.map((person) => <li>{person.age}</li>);

  const personList = data.map((person) => (
    <li>{`Name: ${person.name}, Age: ${person.age}`}</li>
  ));

  return <ul>{ nameList || ageList || personList }</ul>;