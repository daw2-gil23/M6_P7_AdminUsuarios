import { router } from "./Router"

export const header ={
    template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="about">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="admin">Admin</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>`,

    script: ()=>{
        console.log('hola soy header')
        //home
        document.querySelector('#home').addEventListener('click',()=>{
            router.home()
        })

        //admin
        document.querySelector('#about').addEventListener('click',()=>{
            router.about()
        })

        document.querySelector('#admin').addEventListener('click',()=>{
            router.admin()
        })

        const main = document.querySelector("main")

        main.addEventListener("click",(event)=>{
            if(event.target.classList.contains('eliminar')){
                router.eliminar(event)
            }
            if(event.target.classList.contains('editar')){
                router.editar(event)
            }
        })

        //about
        document.querySelector('#about').addEventListener('click',()=>{
            router.about()
        })
    }
}