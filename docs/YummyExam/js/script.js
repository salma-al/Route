const mainMealsContainer = document.getElementById('mainMealsContainer');

// Navbar list
const navSearch = document.getElementById('navSearch');
const navCat = document.getElementById('navCat');
const navArea = document.getElementById('navArea');
const navIng = document.getElementById('navIng');
const navContact = document.getElementById('navContact');

// Menu Animation

$('.bars-icon').on('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);
});

// -------- Main page meals --------

async function mainMeals() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
    const data = await res.json();

    //     console.log(data);
    displayMainMeals(data);
  } catch (error) {
    console.log(error);
  }
}

mainMeals();

function displayMainMeals(data) {
  const dataLength = data.meals.length;
  let container = '';

  for (let i = 0; i < dataLength; i++) {
    container += `
     <div class="col-md-3">
          <div class="meal-card" onclick="singlePage('${data.meals[i].idMeal}')">
                <img
                  src="${data.meals[i].strMealThumb}"
                  alt="meal-pic" />
                <div class="layer-card">
                  <h4>${data.meals[i].strMeal}</h4>
                </div>
          </div>
     </div>
  `;
  }

  mainMealsContainer.innerHTML = container;
}

// -------- Categories Page --------

navCat.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);
  catMeals();
});

async function catMeals() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const data = await res.json();

    //     console.log(data);
    displayCategories(data);
  } catch (error) {
    console.log(error);
  }
}

function displayCategories(data) {
  //   console.log(data);
  const dataLength = data.categories.length;
  //   console.log(dataLength);
  let container = '';

  for (let i = 0; i < dataLength; i++) {
    container += `
     <div class="col-md-3">
          <div class="meal-card" onclick="categoryMeal('${
            data.categories[i].strCategory
          }')">
                <img
                  src="${data.categories[i].strCategoryThumb}"
                  alt="meal-pic" />
                <div class="layer-card">
                  <h4  class="text-center">${
                    data.categories[i].strCategory
                  }</h4>
                  <p  class="text-center">${truncateStringToWords(
                    data.categories[i].strCategoryDescription
                  )}</p>
                </div>
          </div>
     </div>
  `;
  }

  mainMealsContainer.innerHTML = container;
}

async function categoryMeal(cat) {
  console.log(cat);
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    const data = await res.json();

    //     console.log(data);
    displayCatMeal(data);
  } catch (error) {
    console.log(error);
  }
}

function displayCatMeal(data) {
  const dataLength = data.meals.length;
  console.log(dataLength);
  let container = '';

  for (let i = 0; i < dataLength; i++) {
    container += `
     <div class="col-md-3">
          <div class="meal-card">
                <img
                  src="${data.meals[i].strMealThumb}"
                  alt="meal-pic" />
                <div class="layer-card">
                  <h4>${data.meals[i].strMeal}</h4>
                </div>
          </div>
     </div>
  `;
  }

  mainMealsContainer.innerHTML = container;
}

function truncateStringToWords(inputString) {
  const words = inputString.split(' ');
  if (words.length <= 20) {
    return inputString;
  } else {
    return words.slice(0, 20).join(' ') + '...';
  }
}

// -------- Area Page --------

navArea.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);
  areaMeals();
});

async function areaMeals() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
    const data = await res.json();

    //     console.log(data);
    displayArea(data);
  } catch (error) {
    console.log(error);
  }
}

function displayArea(data) {
  //   console.log(data);
  const dataLength = data.meals.length;
  //   console.log(dataLength);
  let container = '';

  for (let i = 0; i < dataLength; i++) {
    container += `
        <div class="col-md-3">
             <div class="meal-card d-flex flex-column justify-content-center align-items-center text-white" onclick="areaCountry('${data.meals[i].strArea}')">
                   <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3 class="text-center">${data.meals[i].strArea}</h3>
             </div>
        </div>
     `;
  }

  mainMealsContainer.innerHTML = container;
}

async function areaCountry(country) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await res.json();

    //     console.log(data);
    displayCountryMeals(data);
  } catch (error) {
    console.log(error);
  }
}

function displayCountryMeals(data) {
  //   console.log(data);
  const dataLength = data.meals.length;
  let container = '';

  for (let i = 0; i < dataLength; i++) {
    container += `
     <div class="col-md-3">
          <div class="meal-card" onclick="singlePage('${data.meals[i].idMeal}')">
                <img
                  src="${data.meals[i].strMealThumb}"
                  alt="meal-pic" />
                <div class="layer-card">
                  <h4>${data.meals[i].strMeal}</h4>
                </div>
          </div>
     </div>
  `;
  }

  //   console.log(container);
  mainMealsContainer.innerHTML = container;
  //   console.log(data);
}

async function singlePage(id) {
  console.log(id);
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();

    //     console.log(data);
    displaySinglePage(data);
  } catch (error) {
    console.log(error);
  }
}

function displaySinglePage(data) {
  console.log(data);

  let tagsContainer = '';
  let tags = '';

  if (data.meals[0].strTags) {
    tags = data.meals[0].strTags.split(',');
    for (el of tags) {
      tagsContainer += `<li class="alert alert-danger m-2 p-1">${el}</li>`;
    }
  }

  console.log(tags);

  let recipeArr = [];

  for (let i = 1; i < 21; i++) {
    const ingredients = `strIngredient${i}`;
    const measures = `strMeasure${i}`;

    if (data.meals[0][ingredients]) {
      recipeArr.push(
        `${data.meals[0][measures]} ${data.meals[0][ingredients]}`
      );

      //  console.log(
      //    `<li class="alert alert-danger m-2 p-1">${data.meals[0][measures]} ${data.meals[0][ingredients]}</li>`
      //  );
    }
  }

  let recipeContainer = '';

  for (el of recipeArr) {
    recipeContainer += `
     <li class="alert alert-info m-2 p-1">${el}</li>
     `;
  }

  console.log(recipeContainer);

  const container = `
     <div class="col-md-4 text-white">
        <img
          class="w-100 rounded-3"
          src="${data.meals[0].strMealThumb}"
          alt=""
        />
        <h2>${data.meals[0].strMeal}</h2>
      </div>
      <div class="col-md-8 text-white">
        <h2>Instructions</h2>
        <p> ${data.meals[0].strInstructions}
        </p>
        <h3><span class="fw-bolder">Area : </span> ${data.meals[0].strArea}</h3>
        <h3><span class="fw-bolder">Category : </span> ${data.meals[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          ${recipeContainer}
        </ul>

        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${tagsContainer}
          
        </ul>

        <a target="_blank" href=" ${data.meals[0].strSource}" class="btn btn-success">Source</a>
        <a target="_blank" href=" ${data.meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
      </div>
     `;

  mainMealsContainer.innerHTML = container;
}
