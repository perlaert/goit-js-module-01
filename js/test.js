const name = prompt("Enter you name");
let message;

if (!name) {
  message = "Hello, World!";
} else {
  const normalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  message = `Hello, ${normalizedName}`;
}
console.log(message);
