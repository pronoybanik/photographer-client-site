import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10'>
            <div className=' grid grid-cols-2 gap-8'>
                <div className='border-2 p-4 rounded-lg'>
                    <h3 className='font-bold'>1- Difference between SQL and NoSQL</h3>
                    <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className='border-2 p-4 rounded-lg'>
                    <h3 className='font-bold'>2- What is JWT, and how does it work?</h3>
                    <p>JSON Web Token JWT is an open standard RFC 7519 that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>

                </div>
                <div className='border-2 p-4 rounded-lg'>
                    <h3 className='font-bold'>3- What is the difference between javascript and NodeJS?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

                </div>
                <div className='border-2 p-4 rounded-lg'>
                    <h2 className='font-bold'>4- How does NodeJS handle multiple requests at the same time?</h2>
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests</p>

                </div>

           
            </div>
        <div className='border-2 p-4 mt-8'>
            <h1 className='font-bold'>Bullet Point</h1>
            <p>1- That is photographer site</p>
            <p>2- i am use tailwind and daisyUi</p>
            <p>3- jwt are use that site</p>
            <p>4- you have bye the photo that site</p>
            <p>5- user only note js</p>
        </div>
        </div>
    );
};

export default Blogs;