// //проверяем наличие поискоового запроса в нашем URL

// if (location.search) {
//     let params = {}; // создаем объект будущих параметров
// // создаем массив строк параметров ['phoneId=apple', 'phoneId=Samsung', 'howshow=10']
//     const arrayStringParams = location.search.substring(1).split("&");
//     //перебор массива
//     for (let stringParam of arrayStringParams) {
//         // создаем массив одного параметра
//         //'phoneId=apple' => ['phoneId', 'apple']
//         let param = stringParam.split("=");
//         let nameParam = param[0]; // получаем имя параметра
//         let valueParam = param[1]; // получаем значение параметра
// // выполняем проверку пристутсвует ли имя параметра в нашем объекте params
//         if (nameParam in params) {
//             //тогда добавляй в массив значение параметра
//             params[nameParam].push(valueParam);
//         } else {
//             params[nameParam] = [valueParam];
//             //иначе создай ключ внутри объекта и положи в него значение параметра
//         }
//     }
//         const filterForm = document.forms.filterForm;
        
//         const updateInput = (gInputs, typeParam) => {
//             for (let input of gInputs) {
//                 const param = params[typeParam];
//                 for (partParam of param) {
//                     if(partParam === input.value) input.checked = true;
//                 }
//             }
//         }

//         updateInput(filterForm.modelPhone, "phoneId");
//         updateInput(filterForm.howShow, "howShow");

//         filterForm.addEventListener("submit", (e) => {
//             e.preventDefault();

//             let arrayCheckedInput = [];

//             const addCheckedInput = (nameGroupInput, typeParam) => {
//                 for (checkbox of nameGroupInput) {
//                     if (checkbox.checked) {
//                         arrayCheckedInput.push(`${typeParam}=${checkbox.value}`)
//                     }
//                 }
//             }

//             addCheckedInput(e.target.modelPhone, "phoneId");
//             addCheckedInput(e.target.howShow, "howShow");

//             let stringCheckedInput = "";

//             for ([index, activeInput] of arrayCheckedInput.entries()) {
//                 stringCheckedInput += activeInput;
//             }

//             if (index != arrayCheckedInput.length - 1) {
//                 stringCheckedInput += "&";
//             }

//             const baseUrl = `${location.origin}${location.pathname}`;
//             const newUrl = baseUrl + `?${stringCheckedInput}`;

//             location = newUrl;
//         })
// }

if (location.search) {
    const params = {};

    const arrayStringParams = location.search.substring(1).split("&");

    for (let stringParam of arrayStringParams) {
        let param = stringParam.split("=");
        let nameParam = param[0];
        let value = param[1];
        if (nameParam in params) {
            params[nameParam].push(valueParam);
        } else {
            params[nameParam] = [valueParam];
        }
    }

    const filterForm = document.forms.filterForm;

            const updateInput = (gInputs, typeParam) => {
            for (let input of gInputs) {
                const param = params[typeParam];
                for (partParam of param) {
                    if(partParam === input.value) input.checked = true;
                }
            }
        }

        updateInput(filterForm.modelPhone, "phoneId");
        updateInput(filterForm.howShow, "howShow");
}

const url = new URL(location.pathname, location.origin);

filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    url.searchParams.delete("howShow");
    url.searchParams.delete("phoneId");

                const addCheckedInput = (nameGroupInput, typeParam) => {
                for (checkbox of nameGroupInput) {
                    if (checkbox.checked) {
                        url.searchParams.append(typeParam, checkbox.value);
                    }
                }
            }

                        addCheckedInput(e.target.modelPhone, "phoneId");
            addCheckedInput(e.target.howShow, "howShow");

            history.replaceState(null, "", url);
})