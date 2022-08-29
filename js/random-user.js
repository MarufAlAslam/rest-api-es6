const showUsers = (data) => {
    const users = data.results
    for (const user of users) {
        const name = user.name.first + " " + user.name.last;
        const image = user.picture.large;
        const gender = user.gender;
        const city = user.location.city;
        const country = user.location.country;
        const dob = user.dob.date.slice(0, 10);
        const age = user.dob.age;
        const phone = user.phone;
        const email = user.email;
        console.log(user)

        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name} (${gender})</h3>
            <h4>DOB: ${dob} (${age} years)</h4>
            <p>${city}, ${country}</p>
            <div class="flex">
                <a href="tel:${phone}">
                    <i class="fas fa-phone"></i>
                </a>
                <a href="mailto:${email}">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        `;
        document.querySelector("#users").appendChild(userDiv);
    }
}
const loadUsers = () => {
    const url = "https://randomuser.me/api/?results=1";
    fetch(url).then(response => response.json()).then(data => showUsers(data));
}
loadUsers()