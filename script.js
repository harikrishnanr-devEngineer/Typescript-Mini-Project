"use strict";
function showDetails() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let profession = document.getElementById("profession").value;
    let result = document.getElementById("result");
    let popup = document.getElementById("popup");
    result.innerHTML =
        "Name: " + name + "<br>" +
            "Age: " + age + "<br>" +
            "Profession: " + profession;
    popup.style.display = "flex";
}
// Submit Button
document.getElementById("submitBtn")
    ?.addEventListener("click", showDetails);
// Close Button
document.getElementById("closeBtn")
    ?.addEventListener("click", function () {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
});
