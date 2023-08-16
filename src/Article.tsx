import './Article.css'

type Props = {
    title: string
    description: string
    author: string
}

const Article = ({ title, description, author }: Props) => {
    return (
        <div>
            <h2 className="article-title">{title}</h2>
            <p>{description}</p>
            <div>Author: {author}</div>
        </div>
    )
}
export default Article
