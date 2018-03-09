import React, { Component } from 'react'
import './Header.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
     
          <div className='nav-wrapper'>
            <h4 className='logo'>Casablanca</h4> 

            <div class="container">
 
 
 <span className="navButton" type="button"  data-toggle="modal" data-target="#myModal"><i class='material-icons'>shopping_cart</i></span>

 <div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog">
   
   
     <div class="modal-content">
       <div class="modal-header">
         <button type="button" class="close" data-dismiss="modal">&times;</button>
         <h4 class="modal-title">Panier</h4>
       </div>
       <div class="modal-body">
     

       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
     
   </div>
 </div>
 
</div>
       
          </div>
        
      </div>
    )
  }
}
export default App
