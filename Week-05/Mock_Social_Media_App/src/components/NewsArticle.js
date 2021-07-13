import { data } from '../data/server'
import '../styles/newsArticle.css'

export default function NewsArticle() {
    return (
        <div>{data.newsArticles.map(eachArticle => {
            return (
                <article className="newsArticle">
                    <h3>{eachArticle.title} </h3>
                    <p>{eachArticle.article}</p>
                </article>
            )
        })}
        </div>
    )
}