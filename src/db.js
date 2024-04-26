import {connect} from 'mongoose';



(async ()=>{
    try {
        const db = await connect("mongodb://localhost:27017"); 
        console.log("BD conexion to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    
})();
