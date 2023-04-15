import React from 'react'
import responsive from "../../assets/img/responsive.png"
import profil from  "../../assets/img/profil.png"
import design from "../../assets/img/design.png"
import integration from "../../assets/img/integration.png"
import dev from "../../assets/img/dev.png"
import seo from "../../assets/img/seo.png"
  
const CardPointFort = (props) => { 
return  (
	<>
	       <figure>
							<h4>{props.title}</h4>
							<img src={design} title="Categorie : graphisme" alt="Design"/>
							<figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</figcaption>
						</figure>  
	</>
 )


}



const Section = (HandleName) => {
  return (
    <div>
      <section id="slider">
			<div className="conteneur flex-slider">
				<figure id="milieu-haut-gauche">
					<a href="a">
						<img src={responsive} alt=" qui represente plusieurs écrans pour le responsive" title="Responsive design"/>
					</a>
					<figcaption>
						<a href="a">Mise en avant du dernier projet</a>
					</figcaption>
				</figure>
				<div id="milieu-haut-droit">
					<h2>Vous êtes à la recherche d'un développeur pour gérer vos projets web ?</h2>
					<p>Je peux renforcer votre équipe autant sur la partie graphique que développement.</p>
					<p>Seriez-vous prêt à me donner ma chance?</p>
				</div>
			</div>
		</section>
		<main>
			<div className="conteneur flex-main">
				<section id="presentation">
					<h2>Presentation</h2>

					<div className="profil-flex">
						<img src= {profil} title="Photo de Prenom Nom" alt="Prenom Nom"/>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?  Quam totam corporis doloremque doloribus fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero et ratione deleniti ipsa veritatis.</p>
					</div>
					
					<div className="mise-en-avant">

						<CardPointFort title = "Design" img = {design} alt = {"Design"}  figcaption = {"Lorem ipsum dolor, sit amet consectetur adipisicing elit."} />
						<CardPointFort title = "Front-end development" img = {integration} alt = {"Design"}  figcaption = {"dolor, sit amet consectetur adipisicing elit."} />
						<CardPointFort title = "Back-end development" img = {dev} alt = {"Design"}  figcaption = {"Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit"} />
                        <CardPointFort title = "SEO" img = {seo} alt = {"Design"}  figcaption = {"dolor, sit amet consectetur adipisicing elit."} />

						


						

						


					</div>
				</section>
				
					<div className="encart">
						<h3>Qui suis-je ?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit, ipsa esse illo sunt iure voluptatum, labore laboriosam quas officiis non totam repellat natus odit corporis dicta tenetur consectetur sapiente.</p>
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
							<input placeholder="Prenom" type="text" id="prenom" name="prenom"/>

							<label htmlFor="nom">Nom</label> 
							<input  placeholder="Nom" type="text" id="nom" name="nom"/>

							 <label htmlFor="email">E-mail</label> 
							<input  placeholder="E-mail" type="email" id="email" name="email"/>

							<label htmlFor="message">Message</label> 
							<textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>
							
							<input type="submit" onClick={()=>HandleName("test")}/>
						
					</div>
				</div>
		</main>
   </div>
  
)}

export default Section
