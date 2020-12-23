export default st => `
<table id="pizzas">
<tr><th>Crust</th><th>Cheese</th><th>Sauce</th><th>Toppings</th></tr>
${st.pizzas.reduce((html, pizza) => {
  return (
    html +
    `<tr><td>${pizza.crust}</td><td>${pizza.cheese}</td><td>${
      pizza.sauce
    }</td><td>${pizza.toppings.join(" & ")}</td></tr>`
  );
})}
</table>
`;
