import React from 'react'

class Hello extends React.Component{
		render(){
		return  <> 
		<h1>Hello World</h1>
		<h2>{this.props.greeting}</h2>
		</>		
				
					
		} 

		}

export default Hello;
