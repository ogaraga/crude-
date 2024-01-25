import PropTypes from 'prop-types';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
function EditData(props){ 
    const {_id}=useParams();
    const [name, setName]=useState('')    
    const [sectors, setSectors]=useState('')
    const navigate = useNavigate();
    
    const handleUpdate = async (ev)=>{
        ev.preventDefault();
            const options= {
                method: "PUT",
                cors: "cors",
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                   _id, 
                   name,
                   sectors,
                  
                }),

            }
            const response = await fetch("http://localhost:5500/data/"+_id, options)
            if(response.ok ){
                alert('details captured and saved');
                navigate("/dataList")
                return response 
            }else{
                console.log('response not ok while fetching data!')      
                
            }
        
    }
  return (
    <div style={{backgroundColor: 'aliceblue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
        <h1>CHANGE AND CLICK UPDATE TO SAVE</h1>
        <form onSubmit={handleUpdate}>
            <table style={{display: "flex", alignItems:"center",justifyContent:"center", height:'300px', margin:'auto'}}>
                <tr style={{border:'1px solid black', backgroundColor: 'grey', width: 'auto'}}>
                    <td><input style={{width: '200px'}} type="text" name="ID" placeholder='ID' disabled value={props._id}/></td>
                    <td><input style={{width: '100px'}} type="text" name="name" value={props.name} placeholder='Enter name'  onChange={ev=>setName(ev.target.value)}/></td>
                    <td><select multiple size={5} value={props.sectors} onChange={ev =>setSectors(ev.target.value)}>
                    <option value="Manufacturing">Manufacturing</option>
            <option value="Construction materials" style={{marginLeft: '10px'}}>Construction materials</option>
            <option value="Electronics and Optics" style={{marginLeft: '10px'}}>Electronics and Optics</option>
            <option value="Food and Beverage">Food and Beverage</option>
            <option value="Bakery & confectionery products" style={{marginLeft: '10px'}}>Bakery & confectionery products</option>
            <option value="Beverages" style={{marginLeft: '10px'}}>Beverages</option>
            <option value="Fish & fish products" style={{marginLeft: '10px'}}>Fish & fish products </option>
            <option value="Meat & meat products" style={{marginLeft: '10px'}}>Meat & meat products</option>
            <option value="Milk & dairy products" style={{marginLeft: '10px'}}>Milk & dairy products </option>
            <option value="Sweets & snack food" style={{marginLeft: '10px'}}>Sweets & snack food</option>
            <option value="Furniture">Furniture</option>
            <option value="Bathroom/sauna " style={{marginLeft: '10px'}}>Bathroom/sauna </option>
            <option value="Bedroom" style={{marginLeft: '10px'}}>Bedroom</option>
            <option value="Children's room" style={{marginLeft: '10px'}}>Children &apos;s room </option>
            <option value="Kitchen" style={{marginLeft: '10px'}}>Kitchen </option>
            <option value="Living room" style={{marginLeft: '10px'}}>Living room </option>
            <option value="Office" style={{marginLeft: '10px'}}>Office</option>
            <option value="Other (Furniture)" style={{marginLeft: '10px'}}>Other (Furniture)</option>
            <option value="Outdoor">Outdoor </option>
            <option value="Project furniture" style={{marginLeft: '10px'}}>Project furniture</option>
            <option value="Machinery">Machinery</option>
            <option value="Machinery components" style={{marginLeft: '10px'}}>Machinery components</option>
            <option value="Machinery equipment/tools" style={{marginLeft: '10px'}}>Machinery equipment/tools</option>
            <option value="Manufacture of machinery" style={{marginLeft: '10px'}}>Manufacture of machinery </option>
            <option value="Maritime">Maritime</option>
            <option value="Aluminium and steel workboats" style={{marginLeft: '10px'}}>Aluminium and steel workboats </option>
            <option value="Boat/Yacht building" style={{marginLeft: '10px'}}>Boat/Yacht building</option>
            <option value="Ship repair and conversion" style={{marginLeft: '10px'}}>Ship repair and conversion</option>
            <option value="Metal structures">Metal structures</option>
            <option value="Repair and maintenance service" style={{marginLeft: '10px'}}>Repair and maintenance service</option>
            <option value="Metalworking" style={{marginLeft: '10px'}}>Metalworking</option>
            <option value="Construction of metal structures" style={{marginLeft: '10px'}}>Construction of metal structures</option>
            <option value="Houses and buildings" style={{marginLeft: '10px'}}>Houses and buildings</option>
            <option value="Metal products" style={{marginLeft: '10px'}}>Metal products</option>
            <option value="Metal works" style={{marginLeft: '10px'}}>Metal works</option>
            <option value="CNC-machining">CNC-machining</option>
            <option value="Forgings, Fasteners" style={{marginLeft: '10px'}}>Forgings, Fasteners </option>
            <option value="Gas, Plasma, Laser cutting" style={{marginLeft: '10px'}}>Gas, Plasma, Laser cutting</option>
            <option value="MIG, TIG, Aluminum welding" style={{marginLeft: '10px'}}>MIG, TIG, Aluminum welding</option>
            <option value="Plastic and Rubber" style={{marginLeft: '10px'}}>Plastic and Rubber</option>
            <option value="Packaging" style={{marginLeft: '10px'}}>Packaging</option>
            <option value="Plastic goods" style={{marginLeft: '10px'}}>Plastic goods</option>
            <option value="Plastic processing technology" style={{marginLeft: '10px'}}>Plastic processing technology</option>
            <option value="Blowing" style={{marginLeft: '10px'}}>Blowing</option>
            <option value="Moulding" style={{marginLeft: '10px'}}>Moulding</option>
            <option value="Plastics welding and processing" style={{marginLeft: '10px'}}>Plastics welding and processing</option>
            <option value="Plastic profiles" style={{marginLeft: '10px'}}>Plastic profiles</option>
            <option value="Printing" style={{marginLeft: '10px'}}>Printing </option>
            <option value="Advertising" style={{marginLeft: '10px'}}>Advertising</option>
            <option value="Book/Periodicals printing" style={{marginLeft: '10px'}}>Book/Periodicals printing</option>
            <option value="Labelling and packaging printing" style={{marginLeft: '10px'}}>Labelling and packaging printing</option>
            <option value="Textile and Clothing">Textile and Clothing</option>
            <option value="Clothing" style={{marginLeft: '10px'}}>Clothing</option>
            <option value="Textile" style={{marginLeft: '10px'}}>Textile</option>
            <option value="Wood">Wood</option>
            <option value="Other (Wood)" style={{marginLeft: '10px'}}>Other (Wood)</option>
            <option value="Wooden building materials" style={{marginLeft: '10px'}}>Wooden building materials</option>
            <option value="Wooden houses" style={{marginLeft: '10px'}}>Wooden houses</option>
            <option value="Creative industries">Creative industries</option>
            <option value="Energy technology">Energy technology</option>
            <option value="Environment">Environment</option>
            <option value="Service">Service</option>
            <option value="Business services" style={{marginLeft: '10px'}}>Business services</option>
            <option value="Engineering">Engineering</option>
            <option value="Information Technology and Telecommunications" style={{marginLeft: '10px'}}>Information Technology and Telecommunications</option>
            <option value="Data processing, Web portals, E-marketing" style={{marginLeft: '10px'}}>Data processing, Web portals, E-marketing</option>
            <option value="Programming, Consultancy" style={{marginLeft: '10px'}}>Programming, Consultancy</option>
            <option value="Software, Hardware" style={{marginLeft: '10px'}}>Software, Hardware</option>
            <option value="Telecommunications" style={{marginLeft: '10px'}}>Telecommunications</option>
            <option value="Tourism">Tourism</option>
            <option value="Translation services">Translation services</option>
            <option value="Transport and Logistics">Transport and Logistics</option>
            <option value="Air" style={{marginLeft: '10px'}}>Air</option>
            <option value="Rail" style={{marginLeft: '10px'}}>Rail</option>
            <option value="Road" style={{marginLeft: '10px'}}>Road</option>
            <option value="Water" style={{marginLeft: '10px'}}>Water</option>            
            <option value="Other">Other</option>
                    </select>
                        </td>
                    <td><button style={{width:'100px', height: 'auto', padding: '10px', backgroundColor: 'green', color: 'crimson',cursor: 'pointer'}} type="submit">Update</button></td>
                    
                </tr>
            </table>
        </form>
    </div>
  )
}
EditData.propTypes = {
    name: PropTypes.string,
    sectors:PropTypes.string,
    _id: PropTypes.string
}

export default EditData