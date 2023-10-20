import React from "react"
import appFirebase from "../credenciales"
import {getFirestore, collection, addDoc} from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

const Form = () => {

    let urlImg;
    const guardarInfo = async(e) => {
        e.preventDefault()
        const tarea = e.target.tarea.value;
        const descripcion = e.target.descripcion.value;
        
        const newTarea = {
            tarea: tarea,
            descripcion: descripcion,
            imagen: urlImg
        }
        //funcion de guardado
        try{
            await addDoc(collection(db,'tareas'),{
                ...newTarea
            })
        } catch(error){
            console.log(error);
        }
        e.target.tarea.value = '';
        e.target.descripcion.value = '';
        e.target.file.value = '';

    }
    const fileHandler = async(e) => {
        //detectar archivo
        const archivoImg = e.target.files[0];
        // cargar al storage
        const refArchivo = ref(storage, `documentos/${archivoImg.name}`)
        await uploadBytes(refArchivo, archivoImg)
        //obtener url de la imagen de storage
        urlImg = await getDownloadURL(refArchivo)
    }

    return (
        <div className="card card-body">
            <h3 className="text-center">Agregar Tarea</h3>
            <form onSubmit={guardarInfo}>
                <label>Tarea:</label>
                <div className="form-group">
                    <input type="text" placeholder="Ingresar la tarea" id="tarea" className="form-control mt-1" required></input>
                </div>
                <label>Descripción:</label>
                <div className="form-group">
                    <input type="text" placeholder="Ingresar una descripción" id="descripcion"className="form-control mt-1" required></input>
                </div>
                <label>Agregar Imagen:</label>
                <input type="file" id="file" placeholder="Agregar Imagen" className="form-control" onChange={fileHandler}></input>
                <button className=" boton1 mt-3 form-control">Guardar</button>
                </form>
        </div>
    )
}

export default Form