const cards = document.querySelector(".cards");
const button = document.querySelector(".button");

async function getJSON(url, errorMsg = "Something went wrong.") {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(errorMsg);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    renderError(error);
  }
}

const renderRecipes = (data) => {
  const meals = data.meals[0];

  const html = `
      <article class="card">
        <h3>${meals.strMeal}</h3>
        <img src="${meals.strMealThumb}" alt="provisoire" class="img-responsive">
        <ul>
          <li>${meals.strCategory}</li>
          <li>${meals.strArea}</li>
        </ul>
        <p>${meals.strInstructions}</p>
      </article>`;
  cards.insertAdjacentHTML("beforeend", html);
};

const renderError = (msg) => {
  const card = document.querySelector(".cars");
  card.insertAdjacentText("beforeend", msg);
};

const recipes = async () => {
  try {
    const data = await getJSON(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    renderRecipes(data);
  } catch (error) {
    console.error(renderError);
  }
};

button.addEventListener("click", () => {
  recipes();
});
