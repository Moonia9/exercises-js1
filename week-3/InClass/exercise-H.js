const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function isLongName(name) {
    return name.length > 6;
  }

  names.find(isLongName);
  console.log(names.find(isLongName)); //is only returning the first one!!!
  console.log(names.filter(isLongName)); //returns all of them


  const namesArray = ["Adria", "Nuria", "Joan", "Gerard", "Ferran"];

  function isMyNameInTheArray(name, array){
      if(array.includes(name)){
          return "Found me";
      } else {
          return "Haven't found me :(";
      }
  }
  console.log(isMyNameInTheArray("Enia", namesArray));
  console.log(isMyNameInTheArray("Adria", namesArray));


