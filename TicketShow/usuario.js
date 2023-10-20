fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>{
    let cad=`<h2>Usuarios recientes de TicketShow</h2>
    <table border=3>
    <tr>
        <td><b>Nombre</b></td>
        <td><b>Email</b></td>
        <td><b>Ciudad</b></td>
    </tr>

    `
    for(usuario of data){
       cad=cad+`
   <tr>
       <td>${usuario.name}</td>
       <td>${usuario.email}</td>
       <td>${usuario.address.city}</td>
       </tr>
   `
    }

    cad=cad+`</table>`
    document.querySelector("main").innerHTML=cad;
})
