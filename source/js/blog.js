// const SERVER_URL = "https://academy.directlinedev.com";
// const filterForm = document.forms.filter;
// const loader = document.querySelector(".preloader--js");
// let loaderCount = 0;

// const showLoader = () => {
//     loaderCount++;
//     loader.classList.add("not-hidden");
//     loader.classList.remove("hidden");
// }

// const hideLoader = () => {
//     loaderCount--;
//     if (loaderCount <= 0) {
//         loader.classList.remove("not-hidden");
//         loader.classList.add("hidden");
//         loaderCount = 0;
//     }
// }

// (function() {
//     filterForm.addEventListener("sumbit", (e) => {
//         e.preventDefault();

//         let data = {};

//         data.name = form.elements.name.value;

//         data.sortBy = ([...filterForm.elements.sortBy]
//         .find(radio => radio.checked) || {value: null}).value;

//     })

//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", SERVER_URL + "/api/tags");
//     xhr.send();
//     // showLoader();
//     xhr.onload = () => {
//         const tags = JSON.parse(xhr.response).data;
//         const tagsBox = document.querySelector(".blog__filter-section__filter--tags");
//         tags.forEach(tag => {
//             const tagHTML = createTag(tag);
//             tagsBox.insertAdjacentHTML("beforeend", tagHTML);
//         })
//         const params = getParamsFromLocation();
//         setDataToFilter(params);
//         getData(params);
//         // hideLoader();
//     }
// })();

// function getParamsFromLocation() {
//     let searchParams = new URLSearchParams(location.search);
//     return {
//         name: searchParams.get("name") || "",
//         tags: searchParams.getAll("tags"),
//         sortBy: searchParams.get("sortBy"),
//     }
// }

// function getData (params) {
//     const result = document.querySelector(".result--js");
//     let xhr = new XMLHttpRequest();
//     let searchParams = new URLSearchParams();
//     searchParams.set("v", "1.0.0");

//     if (params.tags && Array.isArray(params.tags) && params.tags.length) {
//         searchParams.set("tags", JSON.stringify(params.tags));
//     }

//     let filter = {};

//     if (params.name) {
//         filter.title = params.name;
//     }

//     searchParams.set("filter", JSON.stringify(filter));

//     if(params.sortBy) {
//         searchParams.set("sort", JSON.stringify([params.sortBy], "DESC"));
//     }

//     xhr.open("GET", SERVER_URL + "/api/posts?" + searchParams.toString());
//     xhr.send();
//     // showLoader();
//     result.innerHTML = "";
//     xhr.onload = () => {
//         const response = JSON.parse(xhr.response);
//         response.data.forEach(post => {
//             const card = cardCreate({
//                 title: post.title, 
//                 text: post.text, 
//                 src: post.desktopPhotoUrl, 
//                 tags: post.tags
//             })
//             result.insertAdjacentHTML("beforeend", card)
//         })
//     }
// }

// function cardCreate({title, text, src, tags}) {
//     return `
//     <div class="blog__card__wrap">
//         <div classs="blog__card">
//             <img src="${SERVER_URL}${src}" class="blog__card__img" alt="${title}">
//             <h5 class="blog__card__title">${title}</h5>
//             <p class="blog__card__text">${text}</p>
//             ${tags.map(tag => `<span style="color: ${color}"></span>`)}
//         </div>
//     </div>
//     `
// }

// function setDataToFilter(data) {
//     const filterForm = document.forms.filter;
//     // filterForm.elements.name.value = data.name;
//     filterForm.elements.tags.forEach(checkbox => {
//         checkbox.checked = data.tags.includes(checkbox.value);
//     })
//     filterForm.elements.sort.forEach(radio => {
//         radio.checked = data.sort === radio.value;
//     })
// } 

// //стилизация checkbox не доделана
// function createTag ({id, color}) {
//     return `
//     <label for="${id}">
//         <input type="checkbox" style="color: ${color};" class="checkbox" id="${id}" value="blue" name="tags">
//     </label>
//     `
// }

//НЕСБРОС ФИЛЬТРОВ//

//проверяем наличие поискового запроса в нашем URL
if (location.search) {
    //создаем объект будущих параметров
    const params = {};
    //создаем массив строк параметров
    const arrayStringParams = location.search.substring(1).split("&");
    //делаем перебор массива
    for (let stringParam of arrayStringParams) {
        let param = stringParam.split("=");
        let nameParam = param[0];
        let valueParam = param[1];
        if (nameParam in params) {
            params[nameParam].push(valueParam);
        } else {
            params[nameParam] = [valueParam];
        }
    }
    const updateInput = (gInputs, typeParam) => {
            for (let input of gInputs) {
                const param = params[typeParam];
                for (partParam of param) {
                    if(partParam === input.value) input.checked = true;
                }
            }
        }
        
        updateInput(filterForm.tags, "tags");
        updateInput(filterForm.views, "views");
        updateInput(filterForm.comments, "comments");
        updateInput(filterForm.howShow, "howShow");
        updateInput(filterForm.sort, "sort");
    }

const url = new URL(location.pathname, location.origin);

filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    url.searchParams.delete("tags");
    url.searchParams.delete("views");
    url.searchParams.delete("comments");
    url.searchParams.delete("howShow");
    url.searchParams.delete("sort");

    const addCheckedInput = (nameGroupInput, typeParam) => {
        for (checkbox of nameGroupInput) {
            if (checkbox.checked) {
                url.searchParams.append(typeParam, checkbox.value);
            }
        }
    }

    addCheckedInput(e.target.tags, "tags");
    addCheckedInput(e.target.views, "views");
    addCheckedInput(e.target.comments, "comments");
    addCheckedInput(e.target.howShow, "howShow");
    addCheckedInput(e.target.sort, "sort");

    history.replaceState(null, "", url);
})