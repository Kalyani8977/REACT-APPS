import React from "react"; 
function CondRend(){
    const user="user"
    if (user==="admin"){
        return(<>
        <h1>welcome admin</h1>
        </>)
    }
    else{
        return(<>
        <h1>welcome user</h1>
        </>)
    }

}
export default CondRend;