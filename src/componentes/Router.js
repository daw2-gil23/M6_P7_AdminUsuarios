import { adminUser } from "../vistas/AdminUser";
import { home } from "../vistas/Home"
import { registro } from "./Regristo";
import { usuarios } from "./Usuario";
import { v4 as uuidv4 } from 'uuid';
import multiavatar from '@multiavatar/multiavatar/esm'
import { editarPerfil } from "./EditarPerfil";

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
        home.script()
    },
    admin: ()=>{
        document.querySelector('.tabla').innerHTML = adminUser.template
        adminUser.script()
        document.querySelector('.registro').innerHTML = registro.template
        registro.script()
        
    },
    about: ()=>{
        document.querySelector('main').innerHTML = adminUser.template
        adminUser.script()
    },
    eliminar: (evento)=>{
        let usarioId = evento.target.dataset.id
        alert("Estás borrando el usuario con id: " + usarioId)
        const trId = document.getElementById(usarioId); 
        console.log(trId)
        trId.classList.add('fila-oculta')

    },
    editar: (evento)=>{
        document.querySelector('#formEditar').innerHTML = editarPerfil.template
        editarPerfil.script()
        let usarioId = evento.target.dataset.id
        usuarios.forEach(usuario => {
            if(usuario.id == usarioId){
                document.getElementById('nickE').value=usuario.nick
                document.getElementById('emailE').value=usuario.email
                document.getElementById('passwordE').value=usuario.password
                let svgCode = multiavatar(usuario.nick)
                document.querySelector('#avatarE').innerHTML = svgCode
            }
        });
    },
    editarEnviar: (evento)=>{
        evento.preventDefault()

        var email = document.getElementById('emailE').value;

        
        const inputNick = document.querySelector("#nickE").value
        const inputContraseña = document.querySelector("#passwordE").value
        const inputemail = document.querySelector("#emailE").value

        const posicionUsuario = usuarios.findIndex(usuario=>usuario.email == email)
        const usuarioId = usuarios.find(usuario=>usuario.email == email) 

        console.log(inputemail)
        console.log("as " + usuarios[posicionUsuario].email)

        usuarios[posicionUsuario].nick = inputNick
        usuarios[posicionUsuario].password = inputContraseña
        usuarios[posicionUsuario].email = inputemail
        

        // Selecciono la fila que deseas actualizar
        var row = document.getElementById(usuarioId.id);

        // Modifico los valores de las celdas
        row.cells[0].innerHTML = usuarioId.id;
        row.cells[1].innerHTML = inputNick;
        row.cells[2].innerHTML = inputemail;
        row.cells[3].innerHTML = inputContraseña;

        //Reemplazo la fila antigua con la fila modificada en su posición original
        var parent = row.parentNode;
        var nextSibling = row.nextSibling;
        parent.removeChild(row);
        parent.insertBefore(row, nextSibling);
                
    },
    añadir:(evento)=>{
        const inputNick = document.querySelector("#nick").value
        const inputContraseña = document.querySelector("#password").value
        const inputemail = document.querySelector("#email").value
        evento.preventDefault()

        const usuarioNuevo = 
            {
                nick:inputNick,
                email:inputemail,
                password: inputContraseña
            }
        

        let idNuevo = uuidv4() 
        usuarioNuevo.id = idNuevo
        usuarios.push(usuarioNuevo);

        var table = document.getElementById("cuerpoTabla");

        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger", "eliminar");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.setAttribute("data-id", idNuevo);

        var editarBtn = document.createElement("button");
        editarBtn.classList.add("btn", "btn-info", "editar");
        editarBtn.textContent = "Editar";
        editarBtn.setAttribute("data-id", idNuevo);
        editarBtn.setAttribute("data-bs-toggle", "modal");
        editarBtn.setAttribute("data-bs-target", "#exampleModal");

        // Creo una nueva fila y celdas
        var tr = document.createElement("tr");
        tr.setAttribute("id", idNuevo);

        var id = document.createElement("td");
        var nick = document.createElement("td");
        var email = document.createElement("td");
        var password = document.createElement("td");
        var password = document.createElement("td");
        var botonEl = document.createElement("td");
        var botonEd = document.createElement("td");

        botonEl.appendChild(deleteBtn)
        botonEd.appendChild(editarBtn)
        // Agrego los datos del usuario a las celdas
        id.innerHTML= idNuevo
        nick.innerHTML = inputNick;
        email.innerHTML = inputemail;
        password.innerHTML = inputContraseña;

        // Agrega las celdas a la fila
        tr.appendChild(id);
        tr.appendChild(nick);
        tr.appendChild(email);
        tr.appendChild(password);
        tr.appendChild(botonEl);
        tr.appendChild(botonEd);

        // Agrega la fila a la tabla
        table.appendChild(tr);

        console.log(table.appendChild(tr))

        console.log(usuarios);
    },
    avatar:(evento)=>{
        let svgCode = multiavatar(evento.target.value)
        document.querySelector('#avatar').innerHTML = svgCode
    }
}