import logo from './cropped-big.png';
import './comment.css';
import { BrowserRouter as Router} from 'react-router-dom';

const Comment = () => {
  
    return (

     <Router> 
       
<div id="navbar has-text-centered">
  <nav class="navbar is-white has-shadow">
  
     <div class="navbar-menu is-active" id="nav-links">

        <div class="navbar-end">
          <a class="navbar-item has-text-info" target="_self" href="/">Liste des tests</a>
          <a class="navbar-item has-text-warning-dark" target="_self" href="/webcam">Testez votre webcam</a>
          <a class="navbar-item has-text-success" target ="_self" href="/Panopticon">Panopticon</a>
          <a class="navbar-item has-text-danger" rel="noreferrer" target ="_self" href="https://3wa.fr/">Site Officiel 3WA</a>
      </div>
    </div>
  </nav>
</div>

          <div id="body"> 
          <br/>

          <div class="alert">message envoyé !</div>

                <form class="contactForm">
      <div class="field is-white">
        <label class="label has-text-white">Nom</label>
        <div class="control">
          <input class="input is-normal has-text-centered is-black" id="lastName" type="text" placeholder="Entrez votre nom" required/>
          <br/>
        </div>
      </div>
      
      <div class="field">
        <label class="label has-text-white">Prénom</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-normal has-text-centered is-black" id="firstName" type="text" placeholder="Entrez votre prénom" required/>
          <br/>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      
      <div class="field is-white">
        <label class="label has-text-white">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-normal has-text-centered is-black" id="email" type="email" placeholder="Entrez votre adresse mail" required/>
          <br/>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
<label class="label has-text-white">Votre Commentaire</label>
      <div class="field is-white">
        <label class="label has-text-white is-black"></label>
        <div class="control">
          <textarea class="textarea is-large has-text-centered is-black" id ="message" placeholder="Quel est votre problème ?" required></textarea>
        </div>
      </div>
      <br/>
      
      <div id ='columns' class="columns">
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-rounded is-success">Valider</button>
        </div>

        <div class="control">
          <button id ='refuse' type="reset" value="reset" class="button is-rounded is-link">Réinitialiser</button>
        </div>
        
      </div>
      </div>
                </form>
      </div>
      <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase.js"></script>
      <script src="main.js"></script>
      <footer class="footer">
  <div class="content has-text-centered">
    <p>
    <img id='header' alt='' src={logo}></img>
    </p>
  </div>
</footer>
      </Router>
        
    );
};

export default Comment
    