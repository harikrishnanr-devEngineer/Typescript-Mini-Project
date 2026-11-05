function showDetails(): void {

    let name: string =
        (document.getElementById("name") as HTMLInputElement).value;

    let age: string =
        (document.getElementById("age") as HTMLInputElement).value;

    let profession: string =
        (document.getElementById("profession") as HTMLInputElement).value;

    let result =
        document.getElementById("result") as HTMLDivElement;

    let popup =
        document.getElementById("popup") as HTMLDivElement;

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

        let popup =
            document.getElementById("popup") as HTMLDivElement;

        popup.style.display = "none";

    });