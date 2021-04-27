import './App.css';
import React, {Component} from 'react'
import Days from './components/Days'
class App extends Component {
  state = { 
      days: [
      {id:1 , 
      text:"Ok, c'est parti pour l'aventure ! npm reate-react-app et je suis le tutoriel de tech with time qui est en fait un tutoriel full stack, alors, ne me demandez pas pourquoi j'ai l'idée de suivre un tutoriel full-stack alors que je ne connais meme pas react je me demande aussi. En tout cas cela a été une journée assez catastrophique car j'ai rien compris au tutoriel (rien de très étonnant X_X.",
      number_likes: 12,
      title: "Premier jour x) - ou plutôt J-0",
      hours_worked:5.5},
      {id:2 , 
        text:"Je suis le tutoriel de Mosh sur youtube. C'est un tutoriel qui apprend react orienté de manière a ce que tout le monde comprenne il nous a meme montré comme installer node haha. ",
        number_likes: 18,
        title: "J1 - Tutoriel incompréhensible",
        hours_worked:8.5},
      {id:3 , 
        text:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        number_likes: 60,
        title: "J2 - Encore des Tutoriels X_X",
        hours_worked:11.5},
      {id:3 , 
        text:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
        number_likes: 38,
        title: "J3 - Début du journal",
        hours_worked:3.5},
        {id:4 , 
          text:"Alors, voici le jour 4 j'ai pas beaucoup travaillé mais j'ai ajouté la fonctionalité du Like !",
          number_likes: 27,
          title: "J4 - Ajout du like !",
          hours_worked:1.5},
          {id:5 , 
            text:"Ajout des boutons suivant je commence a m'embrouiller dans mon code il va falloir que je trouve une solution pour avoir un seul state et tranqformé les fonctions. J'ai moins de temps pour travailler car je passe le code de la route et que je vais au lycée malheureusement",
            number_likes: 27,
            title: "J5 - la galère",
            hours_worked:1},

    ]
   }

  
  
   handleTotalHours =  () => {
     let total = 0
    this.state.days.map( (hours) => {
      total += hours.hours_worked
      return total
    })
    return total
   };
  render() {  
    
    return ( 
      <div>
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-text">
        <h1> let Téva = learnReact()  </h1>
        </span>
        </nav>
       <ul>
         <li><span className ="badge badge-pill badge-secondary m-2" style={{fontSize:18}} >{this.state.days.length-1} Jours </span> </li>
         <li><span className ="badge badge-pill badge-secondary m-2" style={{fontSize:18}} > {this.handleTotalHours()} Heures Etudiées </span></li>

       </ul>
         <Days days={this.state.days} />
      </div>
     );
  }
}
 
export default App;
 
