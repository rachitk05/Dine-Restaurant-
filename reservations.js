
var peopleCount = 4;
document.querySelector("#people").value = peopleCount;
document.querySelector("#people-count").textContent = peopleCount + " people";

document.querySelector("#decrement").addEventListener("click", function () {
    if (peopleCount > 1) {
        peopleCount--;
        document.querySelector("#people").value = peopleCount;
    }

    if (peopleCount > 1) {
        document.querySelector("#people-count").textContent = peopleCount + " people";
    }
    else {
        document.querySelector("#people-count").textContent = peopleCount + " person";
    }
})

document.querySelector("#increment").addEventListener("click", function () {
    peopleCount++;
    document.querySelector("#people").value = peopleCount;
    document.querySelector("#people-count").textContent = peopleCount + " people";
})




document.querySelector(".success__close").addEventListener("click", function () {
    document.querySelector(".success").parentElement.classList.remove("active");
})



document.querySelectorAll(".form__select").forEach(function(el) {
    el.addEventListener("click", function () {
        el.classList.toggle("open");
    })
})

document.querySelectorAll(".form__option").forEach(function(el) {
    el.addEventListener("click", function () {
        document.querySelectorAll(".form__option").forEach(function(option) {
            option.classList.remove("selected");
        });
        el.classList.add("selected");
        const selected = el.textContent;
        el.parentElement.siblings(".form__select-trigger").querySelector("span").textContent = selected;
        el.parentElement.siblings(".form__select-input").value = selected;
    })
})




document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector(".success").classList.add("active");
})


document.querySelector(".success__close").addEventListener("click", function () {
    document.querySelector(".success").parentElement.classList.remove("active");
})

