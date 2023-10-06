import { useEffect } from "react"

function Users(){
    useEffect(()=>{
        alert("Alerta :)")
    }, [])
    return(
        <div>Users</div>
    )
}

export default Users