
function fadeAll() {
    document.querySelectorAll(".star-ratings").forEach(item => {
        item.classList.add("fade");
    });
};

function removeFadeAll() {
    document.querySelectorAll(".star-ratings").forEach(item => {
        item.classList.remove("fade");
    });
};


document.getElementById("ratings-breakdown").addEventListener("mouseenter", fadeAll)
document.getElementById("ratings-breakdown").addEventListener("mouseleave", removeFadeAll)



const ratings = document.querySelectorAll(".star-ratings");

ratings.forEach(ratings => {
    ratings.addEventListener("mouseenter", (e) => {
        removeFadeClasses(e);
});
})

ratings.forEach(ratings=> {
    ratings.addEventListener("mouseleave", (e) => {
        addFadeClasses(e);
});
})

function removeFadeClasses(e) {
    e.originalTarget.classList.remove("fade");
    }

function addFadeClasses(e) {
    e.originalTarget.classList.add("fade");
}