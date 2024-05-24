import {connect} from 'mongoose';



(async ()=>{
    try {
        const db = await connect("mongodb+srv://cesar1xd1:1234cesar1234@cluster0.jqkk9cf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("BD conexion to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    
})();
