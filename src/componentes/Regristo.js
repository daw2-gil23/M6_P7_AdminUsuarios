import { router } from "./Router"

export const registro = {
    template:`
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nick</label>
            <input type="email" class="form-control nick" id="nick" aria-describedby="nick" >
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="email">
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
        </div>
        <div id="avatar" class="w-50"></div>
        <button id="enviar" type="submit" class="btn btn-primary">Registrarse</button>
    </form>
    `,
    script: ()=>{
        const botonRegistro=document.querySelector("#enviar")

        botonRegistro.addEventListener("click", router.añadir)
        
        const input = document.querySelector("input")

        input.addEventListener("keydown",(event)=>{
            if(event.target.classList.contains('nick')){
                router.avatar(event)
            }
        })        
    }
}