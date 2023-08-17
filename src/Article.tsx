import classes from './Article.module.scss'

type Props = {
    title: string
    description: string
    author: string
}

const Article = ({ title, description, author }: Props) => {
    return (
        <div>
            <h2 className={classes['title']}>{title}</h2>
            <p>{description}</p>
            <div>Author: {author}</div>
        </div>
    )
}
export default Article
