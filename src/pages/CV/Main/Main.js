<<<<<<< HEAD:src/pages/CV/Main/Main.js
import React from 'react'
import profil from  "../../../assets/img/profil.png"
import design from "../../../assets/img/design.png"
import integration from "../../../assets/img/integration.png"
import dev from "../../../assets/img/dev.png"
import seo from "../../../assets/img/seo.png"
import "./Main.css"
  
const CardPointFort = (props) => { 
return  (
	<>
	       <figure>
				<h4>{props.title}</h4>
				<img src={profil} title="Categorie : graphisme" alt="Design"/>
				<figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</figcaption>
				</figure>  
	</>
 )


=======
import React, { Component } from 'react';
import profil from "../../assets/img/profil.png";
import design from "../../assets/img/design.png";
import integration from "../../assets/img/integration.png";
import dev from "../../assets/img/dev.png";
import seo from "../../assets/img/seo.png";
import "./Main.css";

class CardPointFort extends Component {
  render() {
    return (
      <>
        <figure>
          <h4>{this.props.title}</h4>
          <img src={this.props.img} title="Categorie : graphisme" alt="Design" />
          <figcaption>{this.props.figcaption}</figcaption>
        </figure>
      </>
    );
  }
>>>>>>> b5cb8b2ff9e6f714feaa1fccb34d625ac224a5aa:src/components/Main/Main.js
}

class Main extends Component {
  HandleName = () => {
    // Code pour gérer la logique onClick ici
  }

  render() {
    return (
      <main>
        <div className="conteneur flex-main">
          <section id="presentation">
            <h2>Presentation</h2>

            <div className="profil-flex">
              <img src={profil} title="Photo de Prenom Nom" alt="Prenom Nom" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit? Quam totam corporis doloremque doloribus
                fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero
                et ratione deleniti ipsa veritatis.
              </p>
            </div>

            <div className="mise-en-avant">
              <CardPointFort title="Design" img={design} alt="Design" figcaption="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
              <CardPointFort title="Front-end development" img={integration} alt="Design" figcaption="dolor, sit amet consectetur adipisicing elit." />
              <CardPointFort title="Back-end development" img={dev} alt="Design" figcaption="Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit" />
              <CardPointFort title="SEO" img={seo} alt="Design" figcaption="dolor, sit amet consectetur adipisicing elit." />
            </div>
          </section>
          <aside>
            <div className="encart">
              <h3>Qui suis-je ?</h3>
              <p>
                je suis marie et maman d'un petit garcon de 3 ans j'habite actuellement a jerusalem
              </p>
            </div>
            <div className="encart">
               <h3>Experience</h3>
              <ul>
                <li>Experience 1</li>
                <li>Experience 2</li>
                <li>Experience 3</li>
              </ul>
            </div>
            <div className="encart">
              <h3>Contact</h3>
              <label htmlFor="prenom">Prenom</label>
              <input placeholder="Prenom" type="text" id="prenom" name="prenom" />

              <label htmlFor="nom">Nom</label>
              <input placeholder="Nom" type="text" id="nom" name="nom" />

              <label htmlFor="email">E-mail</label>
              <input placeholder="E-mail" type="email" id="email" name="email" />

              <label htmlFor="message">Message</label>
              <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>

              <input type="submit" onClick={this.HandleName}/>


               </div>
		 </aside>
			</div>
		</main>

)}}

export default Main; 
