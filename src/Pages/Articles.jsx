import { useEffect, useState } from "react";

const Articles = () => {

    const [articles, setArticles] = useState([])
    console.log(articles)

    useEffect(() => {
        fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
        .then((response) => response.json())
        .then((blogs) => setArticles(blogs))
       
    }, []);

    return (
        <div className="about">
            <h1>This is Articles</h1>
        
        
            {articles.map((art) => {
            return (
                <div key={art.id}>
                    {art.id} 
                </div>
            );
            })}
        </div> 
    );
};

export default Articles;