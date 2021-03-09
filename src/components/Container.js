import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function Container(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout( async() =>{
            try{
                const jsonData = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await jsonData.json();
                setData(data);
                setIsLoading(false);
        }
         catch(err){
             console.log(err);
             throw new Error("Incorrect Api request");
        }
    },2000);
},[])

console.log(data)
    return(
        <div>
            <h1 className="apih">Fetching Api data</h1>
            {isLoading && <Loader/>}
            <hr/>
            {data.map((post) => {
                return(
                    <p className="card" key={post.id}>{post.title}</p>
                );
            })}
        </div>
    );
}
export default Container;





































// import { useState, useEffect } from "react";

// function Container(){
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setData(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     },[]);
//     return(
//         <div>
//             <h1 className="apih">Fetching Api data</h1>
//             {data.map((post) => {
//                 return(
//                     <p className="card" key={post.id}>{post.title}</p>
//                 );
//             })}
//         </div>
//     );
// }
// export default Container;