import { useState, useEffect } from 'react';

const useFetch = (url) =>{

    const [Data,setData ]= useState(null);

    const[error,SetError]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
          .then((response)=>{
              if(!response.ok){
                throw Error("Retriveing Data from Database")
              }
              console.log(response);
             return response.json()
        })
        .then(data=>setData(data))
        .catch((error)=>{
          console.log(error.message);
          SetError(error.message);
        })

        },500)

    },[url]);

    return[Data, error];
}

export default useFetch;



// npx json-server --watch data/productCard.json --port 3000 --static ./data