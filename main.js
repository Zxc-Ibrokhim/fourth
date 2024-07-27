// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(vada => vada.json())
// .then(vadaKeldi => {
//     vadaKeldi.forEach(item => {
//         const newText = document.createElement("h2");
//         const newId = document.createElement("span");
        
//         newId.textContent = item.id;
//         newText.textContent = item.title;
//         document.body.appendChild(newText,newId);
//     });
// })
// .catch(error => {
//     console.log("Xato");
// })


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const container = document.getElementById('userContainer');

            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Username: ${user.username}</p>
                    <p>Email: <span class="email">${user.email}</span></p>
                    <p>Phone: ${user.phone}</p>
                    <p>Company: ${user.company.name}</p>
                    <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});