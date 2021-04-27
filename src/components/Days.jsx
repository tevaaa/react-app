import React, { Component } from 'react';

class Days extends Component {
    state = { 
        day: this.props.days[this.props.days.length-1],
        index: this.props.days.length-1,
        like_color: "btn btn-outline-primary",
        number_likes: this.props.days[this.props.days.length-1].number_likes
     }
    handleLikeClick =() =>{
      let color
      let likes
      if (this.state.like_color === "btn btn-outline-primary"){
        color = "btn btn-primary"
        likes = this.state.number_likes+1

      } 
      else{
        color = "btn btn-outline-primary"
        likes = this.state.number_likes-1
      }
      this.setState({like_color:color})
      this.setState({number_likes: likes})
    }

    handleNext = () => {
      this.setState({index: this.state.index+1})
    }

    handlePrevious = () => {
      this.setState({index: this.state.index-1})
    }
    render() { 
        return ( 
        <div>
        <div className = "text-center">
          <h4>{this.props.days[this.state.index].title}</h4>
          <p> {this.props.days[this.state.index].text}</p>
        </div>
         
         <div className = "d-flex justify-content-around">
           <button className = "btn btn-danger" onClick={this.handlePrevious}> Précédent</button>
           <div>
            <button className={this.state.like_color} onClick={this.handleLikeClick}>Like</button>
            <span className = "badge badge-primary m-2">{this.state.number_likes}</span>
           </div>
           <button className = "btn btn-success" onClick={this.handleNext}> Suivant </button>
         </div>
        </div>
         );
    }
}
 
export default Days;