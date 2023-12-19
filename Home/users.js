let row = document.querySelector(".row");

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  data.forEach(user => {
    createCard(user);
  });  
}

function createCard(user) {
  row.innerHTML += ` 

  
  <div class="card p-3 m-5" style='width:20rem'>
  <div class='card-title '> 
    <div class='user d-flex '>
    <a href="/Posts/posts.html?userId=${user.id}">
      <i class="fa-solid fa-user pe-2 pt-1" ></i>
   
    </div>
    <h3 class='fw-bold'>${user.name} </h3>
    <h3>${user.username} </h3>
    <div class='email d-flex'>
      <i class="fa-solid fa-square-envelope pe-1"></i>
      <div>${user.email}</div>
    </div>
  </div>
  <div class="card-body d-flex">
   
      <i class="fa-solid fa-building pe-2"></i>
       <p>Company: ${user.company.name} ${user.company.catchPhrase} ${user.company.bs}</p>
    
  </div>
  <div class="card-body d-flex">
    <i class="fa-solid fa-location-dot pe-2"></i>
     <p>Address: ${user.address.street} ${user.address.suite} ${user.address.city} 
     ${user.address.zipcode}
     ${user.address.geo.lat} ${user.address.geo.lng}
     </p>
  </div>
  <ul class="list-group list-group-flush">
    <div class='phone d-flex'>
      <i class="fa-solid fa-phone ps-2 pt-1"></i>
       <li class="list-group-item">Phone: ${user.phone}</li>
    </div>
    <div class='website d-flex'>
      <i class="fa-solid fa-globe ps-2 pt-1"></i>
      <li class="list-group-item">Website: ${user.website}</li>
    </div>
  </ul>
  </a>
</div>

`;
}



getUsers();




