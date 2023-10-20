import React, {useEffect, useState} from "react"
import appFirebase from "../credenciales"
import {getFirestore, collection, getDocs, deleteDoc, doc} from 'firebase/firestore'

const db = getFirestore(appFirebase)

const Lista = () => {
    const [lista, setLista] = useState([])

    useEffect(() => {
        const getLista = async()=>{
            try{
                const querySnapshot = await getDocs(collection(db, "tareas"))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(),id:doc.id})
                })
                setLista(docs)
            } catch(error){
                console.log(error);
            }
        }
        getLista();
    }, [lista])
    
    return (
        <div className="resp">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th>Hecho</th>
                    </tr>
                </thead>    
                <tbody>
                    {lista.map((list) => (
                            <tr key={list.id}>
                                <td data-tarea="Tarea">{list.tarea}</td>
                                <td data-tarea="Descripcion">{list.descripcion}</td>
                                <td data-tarea="Imagen"><img height={150} width={200} src={list.imagen}></img></td>
                                <td><input type="checkbox" id="hecho"></input>
                                <label for='hecho'>Tarea lista</label></td>
                            </tr>
                    ))}    
                </tbody>
            </table>
        </div>
    )
}

export default Lista