import React from "react";
import Gallery from "./Gallery"

const saeAboutHeader = '“All those cars were once just a dream in somebody’s head.”'
const saeAboutDescription = 'SAE Collegiate club is a platform where students sharing a vehement passion for automobile sciences involve themselves in various projects. It is a platform for students to complement the theoretical knowledge imparted in the classroom, with emphasis on the practical aspects of engineering. We work together as a strong team not only on amassing knowledge but also gaining experience in the technical field of design and manufacturing.';

function About() {
    return (
        <div className="about">
            <h3>ABOUT</h3>
            <h4>{saeAboutHeader}</h4>
            <p>{saeAboutDescription}</p>
        </div>
    );
}

function Pictures() {
    return (
        <div >
        <Gallery />
        </div>
    );
}


export default function () {
    return (
        <section id="title">
            <div className="title-description">
                <h1>Welcome to SAE's official website</h1>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 title-left">
                        <About />
                    </div>
                    <div className="col-lg-6 title-left">
                        <Pictures />
                    </div>
                </div>
            </div>
            {/* <Sntc /> */}
        </section>
    )
}
// style="text-align: center; font-size: 1rem;"



    //  <div className="row">
    //           <div className="col-lg-4 title-left">
    //             <div className="about-us title-sections">
    //               <h4>About Us</h4>
    //               <hr />
    //               <p className="title-description-text">We are a community at IIT BHU that focusses on Automotive engineering and its applications</p>
    //             </div>
    //             <div className="featured title-sections">
    //               <h4>Featured</h4>
    //               <hr />
    //               <ul>
    //                 <li className="title-description-text">SAE announces it's new secretaries for the academic year 2020-21</li>
    //                 <li className="title-description-text">SAE to represent IIT BHU in upcoming BAJA competition</li>
    //                 <li className="title-description-text">The core team of SAE successfully compltetes the electric RC Car project</li>
    //                 <li className="title-description-text">The club organised online workshops for 2nd yearites in the COVID scenario</li>
    //                 <li className="title-description-text">Keep yourself healthy and safe - SAE's best wishes with you</li>
    //               </ul>
    //             </div>
    //           </div>
    //           {/* <div className="col-lg-8 col-md-4 title-right">
    //             <img src="images/rc3.jpg" className="rc1" alt="iphone-mockup" />
    //           </div> */}
    //         </div>
    