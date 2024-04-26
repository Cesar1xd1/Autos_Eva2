import {connect} from 'mongoose';



(async ()=>{
    try {
        const db = await connect("mongodb+srv://cesar2xd2:hZNsi1Pt3CpWUsAU@cluster0.gfejevy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("BD conexion to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    
})();
