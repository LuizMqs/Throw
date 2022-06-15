let user = {
  name: "",
  birthdate: "",
  weight: "",
  height: "",
  gender: "",
};

const date = new Date();

function Enviar() {
  const name = document.getElementById("name").value;
  const birthdate = new Date(document.getElementById("date").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  const gender = document.getElementById("select").value;

  user["gender"] = gender;

  if (name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/g).join("") == name && name != "" && name.length >= 5) {
    user["name"] = name;
  } else {
    throw new Error('Field “name” is invalid!')
  }

  if (birthdate.getTime() < date.getTime()) {
    user["birthdate"] = birthdate.toUTCString();
  } else {
    throw new Error('Field “birthDate” is invalid!')
  }

  if (!isNaN(weight)) {
    if (weight > 0) {
      user["weight"] = weight;
    } else {
      throw new Error('Field “weight” is invalid!')
    }
  } else {
    throw new Error('Field “weigth” is invalid!')
  }

  if (!isNaN(height)) {
    if (height > 0) {
      user["height"] = height;
    } else {
      throw new Error('Field “heigth” is invalid!')
    }
  } else {
    throw new Error('Field “heigth” is invalid!')
  }

  if (gender == "") {
    throw new Error('Field “gender” is invalid!')
  }

  console.log(user)
}

document.getElementById("button").addEventListener("click", Enviar);
