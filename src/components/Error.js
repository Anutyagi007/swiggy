import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <div className="flex justify-center align-middle align">
            <h1>Oops tum thode chutiya hoka?</h1>
            <h2>{err.status + " " +err.statusText}</h2>
        </div>
    )
}
export default Error;