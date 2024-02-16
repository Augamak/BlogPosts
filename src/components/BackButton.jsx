import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate()

    const backToList = () => 
    navigate("/articles", { state: { content_text: "" } });
    


    return (
        <h1 style={{cursor: "pointer"}} onClick={backToList}>Back to list</h1>    
    )
}

export default BackButton;