import React from "react";
import axios from 'axios';


const getTodosFromApi =async()=>{
     
        const response = await axios.get('https://dummyjson.com/todos');
        // console.log(response,"res")
        const data = response.data;
        return data.todos;
      

}


export default getTodosFromApi