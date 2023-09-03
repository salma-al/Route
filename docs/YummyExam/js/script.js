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

// -------- Loading screen --------

// -------- Main page meals --------

async function mainMeals() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
    const data = await res.json();

    //     console.log(data);

    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });

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

// -------- End Main page meals --------

// -------- Categories Page --------

navCat.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);

  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  catMeals();
});

async function catMeals() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const data = await res.json();

    //     console.log(data);

    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });

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

    $(function () {
      $('#loadingPage').fadeIn(100, function () {
        $('body').css('overflow', ' hidden');
      });
    });

    displayCatMeal(data);
  } catch (error) {
    console.log(error);
  }
}

function displayCatMeal(data) {
  $(function () {
    $('#loadingPage').fadeOut(500, function () {
      $('body').css('overflow', ' auto');
    });
  });

  const dataLength = data.meals.length;
  console.log(dataLength);
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

// Words Limit

function truncateStringToWords(inputString) {
  const words = inputString.split(' ');
  if (words.length <= 20) {
    return inputString;
  } else {
    return words.slice(0, 20).join(' ') + '...';
  }
}

// -------- End Categories Page --------

// -------- Area Page --------

navArea.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);

  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  areaMeals();
});

async function areaMeals() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
    const data = await res.json();

    //     console.log(data);

    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });

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
  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await res.json();

    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });

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

  mainMealsContainer.innerHTML = container;
}

// -------- End Area Page --------

// -------- Single Page --------

async function singlePage(id) {
  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();

    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });
    displaySinglePage(data);
  } catch (error) {
    console.log(error);
  }
}

function displaySinglePage(data) {
  //   console.log(data);

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
    }
  }

  let recipeContainer = '';

  for (el of recipeArr) {
    recipeContainer += `
     <li class="alert alert-info m-2 p-1">${el}</li>
     `;
  }

  //   console.log(recipeContainer);

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

// -------- End Single Page --------

// -------- Ingredients Page --------

navIng.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);

  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  ingredientsList();
});

async function ingredientsList() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );
    const data = await res.json();

    //     console.log(data);

    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });

    displayIngredientsList(data);
  } catch (error) {
    console.log(error);
  }
}

function displayIngredientsList(data) {
  let container = '';

  for (let i = 0; i < 20; i++) {
    container += `
           <div class="col-md-3">
                <div class="meal-card d-flex flex-column justify-content-center align-items-center text-white" onclick="ingMeal('${
                  data.meals[i].strIngredient
                }')">
                      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                       <h3 class="text-center">${
                         data.meals[i].strIngredient
                       }</h3>
                       <p class="text-center">${truncateStringToWords(
                         data.meals[i].strDescription
                       )}</p>
                </div>
           </div>
        `;
  }

  //   console.log(container);

  mainMealsContainer.innerHTML = container;
}

async function ingMeal(ing) {
  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  //   console.log(ing);

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
    );
    const data = await res.json();

    //     console.log(data);
    $(function () {
      $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', ' auto');
      });
    });

    displayCatMeal(data);
  } catch (error) {
    console.log(error);
  }
}

function displayIngMeal(data) {
  const dataLength = data.meals.length;
  console.log(data);

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
}

// -------- End Ingredients Page --------

// -------- Search Page --------

// navSearch.addEventListener('click', function () {
//   $('.black-nav').animate({ width: 'toggle' }, 700);
//   searchInput();
// });

// function searchInput() {
//   const container = `
//      <div class="col-md-6 text-white">
//         <input
//           onkeyup="searchName(event.target.value)"
//           class="form-control bg-transparent text-white"
//           type="text"
//           placeholder="Search By Name"
//         />
//       </div>

//       <div class="col-md-6">
//         <input onkeyup="searchFLetter(event.target.value)"  maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
//     </div>
//      `;

//   mainMealsContainer.innerHTML = container;
// }

// async function searchName(e) {
//   console.log(e);
//   try {
//     const res = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`
//     );
//     const data = await res.json();

//     //     console.log(data);
//     displaySearchName(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function displaySearchName(data) {
//   console.log(data);

//   const dataLength = data.meals.length;
//   let container = '';

//   for (let i = 0; i < dataLength; i++) {
//     container += `

//      <div class="col-md-3">
//           <div class="meal-card" onclick="singlePage('${data.meals[i].idMeal}')">
//                 <img
//                   src="${data.meals[i].strMealThumb}"
//                   alt="meal-pic" />
//                 <div class="layer-card">
//                   <h4>${data.meals[i].strMeal}</h4>
//                 </div>
//           </div>
//      </div>
//   `;
//   }

//   mainMealsContainer.innerHTML += container;
// }

// function searchFLetter() {
//   //   console.log(e);
// }

// -------- End Search Page --------

// Create a reference to the input field and search results container
// const searchInput = document.getElementById('searchInput');
// const searchResults = document.getElementById('searchResults');

// navSearch.addEventListener('click', function () {
//   $('.black-nav').animate({ width: 'toggle' }, 700);
//   searchInput1();
// });

// function searchInput1() {
//   // Create the input field dynamically
//   const inputContainer = document.createElement('div');
//   inputContainer.classList.add('col-md-6', 'text-white');
//   inputContainer.innerHTML = `
//     <input
//       onkeyup="updateSearch(event.target.value)"
//       class="form-control bg-transparent text-white"
//       type="text"
//       placeholder="Search By Name"
//     />
//   `;

//   // Append the input field to the searchInput container
//   searchInput.appendChild(inputContainer);

//   // Create the search results container dynamically
//   const resultsContainer = document.createElement('div');
//   resultsContainer.id = 'searchResults';
//   searchInput.appendChild(resultsContainer);
// }

// async function updateSearch(query) {
//   // Perform the search only if the query is not empty
//   if (query.trim() !== '') {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//       );
//       const data = await res.json();

//       displaySearchName(data);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     // Clear the search results if the query is empty
//     searchResults.innerHTML = '';
//   }
// }

// function displaySearchName(data) {
//   const dataLength = data.meals.length;
//   let container = '';

//   for (let i = 0; i < dataLength; i++) {
//     container += `
//       <div class="col-md-3">
//         <div class="meal-card" onclick="singlePage('${data.meals[i].idMeal}')">
//           <img
//             src="${data.meals[i].strMealThumb}"
//             alt="meal-pic" />
//           <div class="layer-card">
//             <h4>${data.meals[i].strMeal}</h4>
//           </div>
//         </div>
//       </div>
//     `;
//   }

//   // Update only the search results container, not the input container
//   searchResults.innerHTML = container;
// }

// ==============================================

const inputContainer = document.createElement('div');
const resultsContainer = document.createElement('div');

navSearch.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);
  searchInput();
});

function searchInput() {
  mainMealsContainer.innerHTML = '';

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('row', 'p-4');
  inputContainer.innerHTML = `
     <div class="col-md-6 text-white">
          <input
          onkeyup="searchName(event.target.value)"
          class="form-control bg-transparent text-white"
          type="text"
          placeholder="Search By Name"
          />
     </div>

     <div class="col-md-6">
          <input onkeyup="searchFLetter(event.target.value)"  maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
     </div>
     `;

  // Append  input field
  mainMealsContainer.appendChild(inputContainer);

  // Search results container
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('row', 'g-4');
  resultsContainer.id = 'searchResults';
  mainMealsContainer.appendChild(resultsContainer);
}

async function searchName(query) {
  if (query.trim() !== '') {
    $(function () {
      $('#loadingPage').fadeIn(100, function () {
        $('body').css('overflow', ' hidden');
      });
    });

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();

      $(function () {
        $('#loadingPage').fadeOut(500, function () {
          $('body').css('overflow', ' auto');
        });
      });

      displaySearchName(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    searchResults.innerHTML = '';
  }
}
const loadingPage = document.getElementById('loadingPage');

async function searchFLetter(query) {
  $(function () {
    $('#loadingPage').fadeIn(100, function () {
      $('body').css('overflow', ' hidden');
    });
  });

  if (query.trim() !== '') {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`
      );
      const data = await res.json();

      $(function () {
        $('#loadingPage').fadeOut(500, function () {
          $('body').css('overflow', ' auto');
        });
      });

      displaySearchName(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    searchResults.innerHTML = '';
  }
}

function displaySearchName(data) {
  console.log(data);

  if (!data.meals) {
    searchResults.innerHTML = '';
  }

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

  searchResults.innerHTML = container;
}

// ============================================================================================================
// -------- Contacr Us Page ---------
const nameInput = document.getElementById('nameInput');

const contactInputContainer = document.createElement('div');
const btnContainer = document.createElement('div');

navContact.addEventListener('click', function () {
  $('.black-nav').animate({ width: 'toggle' }, 700);
  contactInputs();
});

function contactInputs() {
  mainMealsContainer.innerHTML = '';

  // Create the input field dynamically
  const contactInputContainer = document.createElement('div');
  contactInputContainer.classList.add('row', 'w-75', 'text-center');
  contactInputContainer.innerHTML = `
  <div class="col-md-6">
          <input
            id="nameInput"
            onkeyup="inputsValidation(window.event||event)"
            type="text"
            class="form-control my-2"
            placeholder="Enter Your Name"
          />
          <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
            Special characters and numbers not allowed
          </div>
        </div>
        <div class="col-md-6">
          <input
            id="emailInput"
            onkeyup="inputsValidation(window.event||event)"
            type="email"
            class="form-control my-2"
            placeholder="Enter Your Email"
          />
          <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
            Email not valid *exemple@yyy.zzz
          </div>
          <div
            data-lastpass-icon-root="true"
            style="
              position: relative !important;
              height: 0px !important;
              width: 0px !important;
              float: left !important;
            "
          ></div>
        </div>
        <div class="col-md-6">
          <input
            id="phoneInput"
            onkeyup="inputsValidation(window.event||event)"
            type="text"
            class="form-control my-2"
            placeholder="Enter Your Phone"
          />
          <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid Phone Number: 10 digit number
          </div>
        </div>
        <div class="col-md-6">
          <input
            id="ageInput"
            onkeyup="inputsValidation(window.event||event)"
            type="number"
            class="form-control my-2"
            placeholder="Enter Your Age"
          />
          <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid age
          </div>
          <div
            data-lastpass-icon-root="true"
            style="
              position: relative !important;
              height: 0px !important;
              width: 0px !important;
              float: left !important;
            "
          ></div>
        </div>
        <div class="col-md-6">
          <input
            id="passwordInput"
            onkeyup="inputsValidation(window.event||event)"
            type="password"
            class="form-control my-2"
            placeholder="Enter Your Password"
          />
          <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid password: Minimum eight characters, at least one letter
            and one number
          </div>
          <div
            data-lastpass-icon-root="true"
            style="
              position: relative !important;
              height: 0px !important;
              width: 0px !important;
              float: left !important;
            "
          ></div>
        </div>
        <div class="col-md-6">
          <input
            id="repasswordInput"
            onkeyup="inputsValidation(window.event||event)"
            type="password"
            class="form-control my-2"
            placeholder="Repassword"
          />
          <div
            id="repasswordAlert"
            class="alert alert-danger w-100 mt-2 d-none"
          >
            Enter valid repassword: Passwords don't match
          </div>
          <div
            data-lastpass-icon-root="true"
            style="
              position: relative !important;
              height: 0px !important;
              width: 0px !important;
              float: left !important;
            "
          ></div>
        </div>

        <button
        id="submitBtn"
        disabled="true"
        class="btn btn-outline-danger px-2 mt-3 w-auto m-auto"
      >
        Submit
      </button>
`;

  // Append the input field to the searchInput container
  mainMealsContainer.appendChild(contactInputContainer);

  // Create the search results container dynamically
  //   const btnContainer = document.createElement('div');
  //   btnContainer.classList.add('row', 'g-4');
  //   btnContainer.id = 'searchResults';

  //   btnContainer.innerHTML = `
  //      <button
  //         id="submitBtn"
  //         disabled="true"
  //         class="btn btn-outline-danger px-2 mt-3"
  //       >
  //         Submit
  //       </button>
  //   `;
  //   mainMealsContainer.appendChild(btnContainer);
}

// ===============================================

function inputsValidation(data) {
  const nameAlert = document.getElementById('nameAlert');
  const emailAlert = document.getElementById('emailAlert');
  const phoneAlert = document.getElementById('phoneAlert');
  const ageAlert = document.getElementById('ageAlert');
  const passwordAlert = document.getElementById('passwordAlert');
  const repasswordAlert = document.getElementById('repasswordAlert');

  const submitBtn = document.getElementById('submitBtn');

  //   let isNameValid = false;
  //   let isEmailValid = false;
  //   let isPhoneValid = false;
  //   let isAgeValid = false;
  //   let isPasswordValid = false;
  //   let isRepasswordValid = false;

  //   Name Validation
  if (data.srcElement.attributes[0]?.nodeValue === 'nameInput') {
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(data.target.value)) {
      // invalid
      document.getElementById('nameAlert').classList.remove('d-none');
    } else {
      // valid
      isNameValid = true;
      document.getElementById('nameAlert').classList.add('d-none');
    }
  }

  //   console.log(data.target);

  //   Email validation
  if (data.srcElement.attributes[0].nodeValue === 'emailInput') {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!regex.test(data.target.value)) {
      // invalid
      document.getElementById('emailAlert').classList.remove('d-none');
    } else {
      // valid
      isEmailValid = true;
      document.getElementById('emailAlert').classList.add('d-none');
    }
  }

  //   Phone validation
  if (data.srcElement.attributes[0].nodeValue === 'phoneInput') {
    //     const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const regex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

    if (!regex.test(data.target.value)) {
      // invalid
      document.getElementById('phoneAlert').classList.remove('d-none');
    } else {
      // valid
      isPhoneValid = true;
      document.getElementById('phoneAlert').classList.add('d-none');
    }
  }

  //   Age validation
  if (data.srcElement.attributes[0].nodeValue === 'ageInput') {
    const regex = /^(?:[1-9][0-9]?|100)$/;

    if (!regex.test(data.target.value)) {
      // invalid
      document.getElementById('ageAlert').classList.remove('d-none');
    } else {
      // valid
      isAgeValid = true;
      document.getElementById('ageAlert').classList.add('d-none');
    }
  }

  //   Password validation
  if (data.srcElement.attributes[0].nodeValue === 'passwordInput') {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!regex.test(data.target.value)) {
      // invalid
      document.getElementById('passwordAlert').classList.remove('d-none');
    } else {
      // valid
      isPasswordValid = true;
      document.getElementById('passwordAlert').classList.add('d-none');
    }
  }

  //   repassword validation

  if (data.srcElement.attributes[0].nodeValue === 'repasswordInput') {
    if (data.target.value !== document.getElementById('passwordInput').value) {
      // invalid
      document.getElementById('repasswordAlert').classList.remove('d-none');
    } else {
      // valid
      isRepasswordValid = true;
      document.getElementById('repasswordAlert').classList.add('d-none');
    }
  }

  console.log(nameAlert.classList.contains('d-none'));
  console.log(ageAlert.classList.contains('d-none'));

  if (
    nameAlert.classList.contains('d-none') &&
    emailAlert.classList.contains('d-none') &&
    ageAlert.classList.contains('d-none') &&
    phoneAlert.classList.contains('d-none') &&
    passwordAlert.classList.contains('d-none') &&
    repasswordAlert.classList.contains('d-none')
  ) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }
}
