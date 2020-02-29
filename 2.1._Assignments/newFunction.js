const aboutMe = (me) => {
    console.log("Information about me:", me)
}

const meAsAnObject = {
    name: "Jeppe",
    surname: "Nannestad Dyekjær",
    age: 24,
    height: 1.96,
    favorite_dish: "sushi"
}

const me = meAsAnObject;

aboutMe(meAsAnObject);
