import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const Articles = () => {
    const {articles, status, error} = useSelector((state) => state.articlesStore)
    const navigate = useNavigate();

    const linkClickManager = (id) => {
        navigate(`/articles/${id}`, {
            state: {
                id, 
                title: articles[id - 1].title,  
                content_text: articles[id - 1 ].content_text, 
                photo_url: articles[id - 1].photo_url
            },
        });
    };

    return (
        <div className="about">
            {
                status === "Loading" 
                ? 
                <div className="loading-data">... LOADING DATA ...
                    <img style={{width: "100px"}} src="https://i.gifer.com/ZZ5H.gif" alt="" />
                </div>
                : 
                status === "Failed" 
                ? 
                <div className="error-data">{error}
                    <img style={{width: "400px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc70c43b-aeca-448a-a158-0f8e7c281a0d/dceqwb1-a75b8ac9-8340-45bb-8049-4883b81baa3c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNzBjNDNiLWFlY2EtNDQ4YS1hMTU4LTBmOGU3YzI4MWEwZFwvZGNlcXdiMS1hNzViOGFjOS04MzQwLTQ1YmItODA0OS00ODgzYjgxYmFhM2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xmt2peugw4IY64xOXTkc3Q1IFo5T861ncwbHc1E4rhM" alt="" />
                </div>     
                :
                <div className="cards-blog">
                    {articles?.map((art) => {
                    return (
                        <div className="cards" key={art.id}>
                            
                            <div className="article-link" 
                                onClick={() => {
                                    linkClickManager(art.id);
                                }} 
                                >
                                <div className="article-title">{art.title}</div>
                                <img src={art.photo_url} alt="photo" style={{width: "150px", paddingTop: "20px"}} />
                                <button className="cards-button">Read more</button>
                            </div>
                        </div>
                    );
                    })}
                </div>    
            }
        </div> 
    );
};

export default Articles;