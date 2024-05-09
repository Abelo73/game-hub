// import useData from "./useData";

import useData from "./useData";


// interface Platform{
//     id:number;
//     name:string;
//     slug:string;
// }


// const usePlatforms = useData<Platform>('/platforms/lists/parents')

// export default usePlatforms

interface Platform{
    id:number;
    name:string;
    slug:string
}


const usePlatforms =()=> useData<Platform> ('/platforms/lists/parents')

export default usePlatforms;