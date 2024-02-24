import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate()

    const backToList = () => 
    navigate("/articles", { state: { hello: "hello" } });
    


    return (
        <h1 style={{cursor: "pointer", width: "200px"}} onClick={backToList}>Back to list</h1>    
    )
}

export default BackButton;