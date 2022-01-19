import React from 'react';

const Home = ({handleLogout}) => {
    return (
        <div>
            <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
            </section>
        </div>
    )
}

export default Home
