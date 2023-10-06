"use client"
import { useRouter } from "next/navigation";
/*
export const metadata={
    title: "Acerca de nosotros - Leonardus"
};*/

function AboutPage(params) {
    const router =useRouter()
    return <section>
        <h1>About Page</h1>
        <p>Si estás en una red restringida, como una red corporativa, intenta ejecutar el comando en una red diferente, como una red doméstica, para determinar si el problema está relacionado con la red en la que te encuentras.
Después de aplicar una de estas soluciones, intenta nuevamente ejecutar npx create-next-app AppNextJS para crear tu proyecto Next.js. Si sigues teniendo problemas, verifica la configuración de tu red o considera ponerse en contacto con el administrador de tu red para obtener ayuda adicional.</p>
        <button className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={()=>{
            alert("Executing code!!!!")
            router.push("/")
        }}>
            Click
        </button>
    </section>

}

export default AboutPage;