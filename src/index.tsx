import React from 'react'
import ReactDOM from 'react-dom/client'

// // without JSX
// const title = React.createElement('h1', { id: 'title' }, 'Hello React')

// // with JSX
// const h1 = (
//     <h1 id="title-2" className="title">
//         Hello React.js
//     </h1>
// )

// const content = (
//     <div>
//         <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
//             consequatur soluta, consectetur similique officia temporibus dicta
//             doloribus molestiae nulla. Est, quaerat quam ducimus laudantium
//             maiores rem asperiores rerum animi non?
//         </p>
//         <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
//             consequatur soluta, consectetur similique officia temporibus dicta
//             doloribus molestiae nulla. Est, quaerat quam ducimus laudantium
//             maiores rem asperiores rerum animi non?
//         </p>
//         <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
//             consequatur soluta, consectetur similique officia temporibus dicta
//             doloribus molestiae nulla. Est, quaerat quam ducimus laudantium
//             maiores rem asperiores rerum animi non?
//         </p>
//     </div>
// )

const Header = () => {
    return <h1>Hello React</h1>
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                consequatur soluta, consectetur similique officia temporibus
                dicta doloribus molestiae nulla. Est, quaerat quam ducimus
                laudantium maiores rem asperiores rerum animi non?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                consequatur soluta, consectetur similique officia temporibus
                dicta doloribus molestiae nulla. Est, quaerat quam ducimus
                laudantium maiores rem asperiores rerum animi non?
            </p>
        </>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
