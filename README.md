# React-Routeur-Dom-Navigation-Menu
_(juste en dessous des badges sympatiques à placer)_

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

J'ai decider de realiser ce mini projet pour venir en aide a un ami qui avait du mal a creer un menu de navigation dans un mini projet react, de ce fait ce projet vise a aider mon ami ainsi que chaque personne ayant cette difficulte dans leur petite application react ce code est gratuit en guise d'apprentissage Alors regaler vous bien!!!

## Pour commencer

Nous allons suivre etapes par etapes les principes a suivre afin de bien realiser ce projet

### Pré-requis

Voici le(s) prerequis necessaire a la realisation de ce projet

- Avoir React-Routeur-Dom installe

### Installation De React Routeur Dom

Pour installer React Routeur Dom vous allez devoir taper cette commande dans votre terminal

Executez la commande ``npm install --save react-router-dom`` Ensuite

- 1- il vous faudra importer les Objet necessaire En faisant

``import { BrowserRouter, Route, Link } from "react-router-dom";`` 

- 2- Utilisation de l'objet Router pour definir nos different Route qui est aussi un objet suivez l'exemple qui suit

            ``<Router>
                <nav>
                    <ul>
                        <li><Link to={'/Home'} className="link">Home</Link></li>
                        <li><Link to={'/Contact'} className="link">Contact</Link></li>
                        <li><Link to={'/About'} className="link">About</Link></li>
                       
                    </ul>
                </nav>
            <Switch>
                <Route exact path='/Home' component={Home} />
                <Route path='/Contact' component={Contact} />
                <Route path='/About' component={About} />
             </Switch>
            </Router>`` 
- 3- importer nos different composant enfant dans le composant parent

            ``import Home from '../Component/Home';
            import Contact from '../Component/Contact';
            import About from '../Component/About';`` 


## Auteurs
Listez le(s) auteur(s) du projet ici !
* **Sanon Steeve** _alias_ [@steevelinformaticien](https://github.com/steevy007)
