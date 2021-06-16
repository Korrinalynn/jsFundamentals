/* 
BRONZE - 
Connect your js file to your html file.
In your html file, create an h1 element with an id of "title".
In your js file, grab your h1 element by its id. 
In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".
Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/

//BRONZE
let title = document.getElementById('title');
title.innerText = "This is my ToDo List:";
title.style.color="#A9A9A9";

/* 
SILVER - 
In your html file, create a div element underneath your h1 element
with an id of "div".
In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph
text to: "#6495ED". Nest the paragraph element inside the div
element.
*/

//SILVER
var para = document.createElement("para");
para.innerText = "Cortado seasonal, latte a dripper plunger pot barista kopi-luwak aftertaste blue mountain. Grinder flavour to go half and half blue mountain macchiato robusta. Eu coffee shop medium and medium cinnamon galão. Lungo sit arabica shop mug sweet espresso, siphon decaffeinated steamed espresso filter. Chicory, viennese filter shop, espresso froth that froth latte.";
document.getElementById("div").appendChild(para);
para.style.color="#6495ED";

/* 
GOLD - 
In your html file underneath your div element, create an unorganized list
element with an id of "list".
In your js file, grab your ul element by its id. 
Create an array in your js file with 4 different items for your to-do
list. 
Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append 
the li element to the ul element of "list".
*/

//GOLD
let list = document.getElementById("list");
let arrayList = [
    "Graduate ElevenFifty",
    "Get a Job",
    "Move Out",
    "Be Happy"
]

arrayList.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.append(li);
});
