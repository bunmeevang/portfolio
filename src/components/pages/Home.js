import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <div className='bodyText'>
                <h1>Hi, I'm Bunmee Vang</h1>
                <div>
                    <img className='profilePic' src='images/profilepic.jpg'/>
                </div>
                <p>I am a Software Developer located in Atlanta GA with a background of CNC machinist/Programmer. I’m inspired by providing quality work that I will be proud of and my employers will approve. My professional value is adaptability and motivation to learn and grow.</p>
                <br></br>
                <h2>Skills</h2>
                <p>JavaScript | HTML | CSS | React.js | Express.js | Django | Node.js</p>
                <br></br>
                <br></br>
                <h2>Education</h2>
                <h3>General Assembly</h3>
                <p>Software Engineering Certificate - May 2021</p>
                <br></br>
                <h3>Tulsa Technology Center</h3>
                <p>NIMs Certified - July 2012</p>
                <Cards/>
                <Footer />
            </div>
        </>
    )
}

export default Home;