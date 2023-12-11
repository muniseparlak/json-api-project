

let row = document.querySelector(".row");

function createCard(post) {
  row.innerHTML += ` <div class="card p-3 m-5 " style='width:20rem'>
  <div class='card-title '> 
    <div class='user d-flex '>
      <i class="fa-solid fa-user pe-2 pt-1" ></i>
       <h3 >${post.id}</h3>
    </div>
    <h3 class='fw-bold'>${post.userId} </h3>
    
  </div>
  <div class="card-body d-flex">
   
      <i class="fa-solid fa-building pe-2"></i>
       <h3>${post.title} </h3>
    
  </div>
  <div class="card-body ">
     <p> ${post.body} 
     </p>
  </div>
  
</div>`;
}

async function getUsers(userId) {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = await response.json();
    data.forEach(post => {
      createCard(post);
  })}
  catch(error){
    console.error(error);
  }
  }
  
  

async function userPrompt(){
  let userInput = prompt('Lütfen 1 ile 10 arasında bir sayı yazınız');
  try {
    let userId = parseInt(userInput);
    if (userId <= 0 || userId > 10 || isNaN(userId) ) {
      throw new Error('Geçersiz userId. Lütfen 1 ile 10 arasında bir sayı girin.');

  }
  

  const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('userId', userId);
    window.history.replaceState(null, null, `?${urlParams.toString()}`);

    await getUsers(userId);
  
  } catch (error) {
    alert(error)
  }
}


userPrompt()