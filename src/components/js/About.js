import React from 'react';
import '../css/About.css';
import '../css/FontAwesomeAll.css';
import imagesAbout from './imagesAbout';

function About() {
  
  return (
    <>
      <section className="pa-banner">
        <img src={imagesAbout[0].urla} alt={imagesAbout[0].alta}
          className="pa-banner-img"
        />
        <div className="pa-banner-content">The best of us at your service</div>
      </section>

      <main className="pa-main">
        <section className="pa-group pa-group-color">
          <div className="pa-container">
            <h2 className="pa-main-title">About Us</h2>
            <p className="pa-main-txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, fuga. Praesentium maxime, excepturi debitis 
              consequatur illum.
            </p>
          </div>
        </section>
        
        <section className="pa-group pa-our-team">
          <h2 className="pa-group-title">Our Team</h2>
          <div className="pa-container pa-container-flex">
            <div className="pa-column pa-column-33">
              <h3 className="pa-our-team-title">Alexis</h3>
              <img src={imagesAbout[1].urla} alt={imagesAbout[1].alta}
                className="pa-our-team-img"
              />
              <p className="pa-our-team-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Asperiores doloribus non facere? Temporibus non corporis 
                officiis magni fugiat debitis? Ratione perspiciatis, 
                temporibus nihil. Pariatur non corporis, maiores facilis, 
                adipisci dicta.
              </p>
            </div>
            <div className="pa-column pa-column-33">
              <h3 className="pa-our-team-title">Esteban</h3>
              <img src={imagesAbout[2].urla} alt={imagesAbout[2].alta}
                className="pa-our-team-img"
              />
              <p className="pa-our-team-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Odit nesciunt quo labore, qui magni, expedita dignissimos 
                officia nulla cupiditate eveniet suscipit ducimus neque ut 
                illum laboriosam adipisci eius perferendis totam.
              </p>
            </div>
            <div className="pa-column pa-column-33">
              <h3 className="pa-our-team-title">Victoria</h3>
              <img src={imagesAbout[3].urla} alt={imagesAbout[3].alta}
                className="pa-our-team-img"
              />
              <p className="pa-our-team-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Assumenda repellat maxime debitis sed! Nisi in, tenetur, 
                quisquam tempore iusto fugiat praesentium autem eligendi 
                cumque odit, eaque molestias unde nostrum voluptatum.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About;