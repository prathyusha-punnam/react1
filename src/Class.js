import React,{Component} from "react"

class Classcomp extends Component{
        state={
          divcont:true,
        }
  
       clicked=()=>{
         this.setState({
           divcont:!this.state.divcont,
         })
       }
     render(){
      return (
        <div>
              <div className="rightbtn">
              <button className="classbtn" onClick={this.clicked}>To see styling in class component</button>
              </div>
        {
           this.state.divcont ? <div className="rightin">
           <h2>This is created using class component </h2> 
           <p className="cpara">This is done using external Css</p>
           <p style={{color:"blue"}}>This is done by using inline css</p>
           </div> : null
        }
     </div>
        
     )
  }
}
export default Classcomp