import React, {useState} from  "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color,  setColor] = useState("red");
	const [ blue,  setBlue ] = useState(false)
	return (
		<div className="text-center">
			
			<h1 className="text-center mt-5">{color}traffiToc</h1>
			<div onClick={() => setColor("red")} className={color == "red" ? "red ligth" : "red ligth opacity-25"}></div>
			<div onClick={() => setColor("yellow")} className={color == "yellow" ? "yellow ligth" : "yellow ligth opacity-25"}></div>
			<div onClick={()=> setColor ("green")} className={color == "green" ? "green ligth" : "green ligth opacity-25"}></div>
			{blue && <div onClick={() => setColor("blue")} className={color == "blue" ? "blue ligth" : "blue ligth opacity-25"}></div>}
			
			<button onClick={() => setBlue(!blue)} className="btn btn-primary">agregar extra</button>
						
		
		</div>
	  

	);

	
};



export default Home;
