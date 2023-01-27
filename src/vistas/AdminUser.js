import { usuarios } from "../componentes/Usuario";

export const adminUser = {
    template:`
    <table class="table table-dark table-striped" id="tabla">
      <thead>
        <tr>
          <th scope="col class="px-5"">Id</th>
          <th scope="col" class="px-5">Nick</th>
          <th scope="col" class="px-5">Email</th>
          <th scope="col" class="px-5">Password</th>
          <th scope="col" class="px-5">Borrar</th>
          <th scope="col" class="px-5">Editar</th>
        </tr>
      </thead>
      <tbody id="cuerpoTabla">
  
      </tbody>
    </table>
    `,
    script:()=>{
  
      let html=``

      usuarios.forEach(usuario => {
        html+=`    
        <tr id="${usuario.id}">
          <th class="px-5">${usuario.id}</th>
          <td class="px-5">${usuario.nick}</td>
          <td class="px-5">${usuario.email}</td>
          <td class="px-5">${usuario.password}</td>
          <td class="px-5"><button data-id="${usuario.id}" type="button" class="btn btn-danger eliminar" >Eliminar</button></td>
          <td class="px-5"><button data-id="${usuario.id}" type="button" class="btn btn-info editar"  data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
        </tr>
        `
      });
  
      document.querySelector('#cuerpoTabla').innerHTML = html
    }
}