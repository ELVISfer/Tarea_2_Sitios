import { useEffect, useState  } from "react";

const url = 'http://localhost:3000/api/contacto';

export const Contacto = () => {


    const [boolEdit, setBoolEdit] = useState(false);
    const [idEdit ,setIdEdit] = useState(0);

    const [dataForm, setDataForm] = useState({
        nombre: "",
        correo: "",
    });


    const formChange = (event)=>{
        const {nombre, value} = event.target;
        setDataForm( previo =>({...previo, [nombre]:value}) );
    };
    
    const formSubmit = async()=>{
    
        event.preventDefault();
    
        if (boolEdit){
            await editData();
        }else{
            await createData();
        }
        

        setDataForm({
    
            nombre: "",
            correo: "",
    
    
        });
    
        setBoolEdit(false);
        setIdEdit(0);
        getDataTask();

    }
    

    //Información del Reporte 

    const [getContact , setContact] = useState([]);
    
    const getDataContact = async ()=>{

        const result = await fetch(url);
        const resultData = await result.json();
        setContact(resultData);
        

    }

    useEffect(()=>{

        getDataContact();

    }, [])

    // Create  

    const createData= async()=>{

        const result = await fetch(url, 
            {
                method : "POST", 
                body : JSON.stringify(dataForm),
                headers : {
                    'Content-Type': 'application/json'
                }
            });
    
        const resultJson = await result.json();
        console.log(resultJson);

    }

    //Delete 

    const deleteData = async(id = 0)=>{

        const result = await fetch(url+"/"+id, {

            method : "DELETE"

        });

        const resultData = await result.json();
        getDataContact();
    }

    // Edit 

    const setDataFormEdit= (contacto)=>{

        setBoolEdit(true);
        setIdEdit(contacto.id);
        setDataForm({

            nombre:  contacto.nombre, 
            correo : contacto.correo

        });

    }

    const editData =  async()=>{

        const result = await fetch(url+"/"+idEdit, 
            {
                method : "PUT", 
                body : JSON.stringify(dataForm),
                headers : {
                    'Content-Type': 'application/json'
                }
            });
    
        const resultJson = await result.json();
        
    }
   
    

    return (
        <>
            <div className="container">
                <h1>Contacto</h1>
                <form onSubmit={formSubmit}>
                    <div className="form-floating mb-3">
                        <input className="form-control" value={dataForm.nombre}  name="nombre" onChange={formChange} />
                        <label >Nombre</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" value={dataForm.correo} name="correo" onChange={formChange}></textarea>
                        <label >Correo</label>
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">{boolEdit ? 'Edit' : 'Create' }</button>
                </form>

                <h2>Contacto</h2>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Correo</td>
                            <td colSpan={3} >Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            getContact.map( (x)=>(

                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.nombre}</td>
                                    <td>{x.correo}</td>
                                    <td><button className="btn btn-warning" onClick={()=>setDataFormEdit(x)  } >Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>  deleteData(x.id) }  >Delete</button></td>
                                </tr>
                                
                            ))

                        }
                    </tbody>
                </table>


            </div>

            

        </>

    )
}