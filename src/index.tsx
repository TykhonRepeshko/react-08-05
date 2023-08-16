import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

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
            <Header title="React" year={2023} />
            <Content />
            <Header title="TS" year={2012} />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
