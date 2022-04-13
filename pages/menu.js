import {Navbar} from './components/Navbar'


function Menu({pizzas}) {
    return (
      <div>
      <Navbar/>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
        
        
          {/*pizzas.map((pizza) => (
            <div  >
             
                
                {pizza.id} - {pizza.name}
              
            </div>
          ))*/}
      
      </div>
      </div>);
}
 export default Menu