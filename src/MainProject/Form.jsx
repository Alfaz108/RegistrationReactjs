import React from "react";
import './style.css'

class Form extends React.Component{
    state={
        Institution:'',
        Admin:'',
        Mobile:'',
        Email:'',
        Division:'',
        Address:'',
        ReferenceName:'',
        ReferenceMobile:'',
        Radio:'',
        Checkbox: []
    }
    NameIns=(event)=>{
        this.setState({Institution: event.target.value})
    }
    AdName=(event)=>{
        this.setState({Admin: event.target.value})
    }
    ChangeMobile=(event)=>{
        this.setState({Mobile: event.target.value})
    }
    ChangeEmail=(event)=>{
        this.setState({Email: event.target.value})
    }
    ChangeDivision=(event)=>{
        this.setState({Division: event.target.value})
    }

    ChangeAddress=(event)=>{
        this.setState({Address: event.target.value})
    }
    ChangeReferenceName=(event)=>{
        this.setState({ReferenceName: event.target.value})
    }
    ChangeReferenceMobile=(event)=>{
        this.setState({ReferenceMobile: event.target.value})
    }
    ChangeRadio=(event)=>{
        this.setState({Radio: event.target.value})
    }
    ChangeCheckbox = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
    
        if (checked) {
          this.setState((prevState) => ({
            Checkbox: [...prevState.Checkbox, value],
          }));
        } 
      }


    display=(e)=>{
        e.preventDefault();
        console.log(this.state.Institution)
        console.log(this.state.Admin)
        console.log(this.state.Mobile)
        console.log(this.state.Email)
        console.log(this.state.Division)
        console.log(this.state.Address)
        console.log(this.state.ReferenceName)
        console.log(this.state. ReferenceMobile)
        console.log(this.state. Radio)
        console.log("Checkbox:", this.state.Checkbox)
        
    }
    render(){
        return(
            <section>
                <div className="container">
                    <h1>Registration</h1>
                    <form className="form">
                        <label>Name of the institution:</label><br></br>
                        <input type="text" onChange={this.NameIns}/><br></br>
                        <label>Admin Name:</label><br></br>
                        <input type="text"onChange={this.AdName} /><br></br>

                        <label>Mobile :</label><br></br>
                        <input type="text" onChange={this.ChangeMobile}/><br></br>

                        <label>Email:</label><br></br>
                        <input type="email" onChange={this.ChangeEmail}/><br></br>

                        <label>DIVISION:</label><br></br>
                        <select id="cars" name="carlist" form="carform"onChange={this.ChangeDivision}>
                        <option value="">Select your division</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">khulna</option>
                        <option value="Rnagpur">Rangpur</option>
                       
                        </select><br></br><br></br>
                        <label>Address:</label><br></br>
                        <input type="text" onChange={this.ChangeAddress}/><br></br>

                        <label>Reference name:</label><br></br>
                        <input type="text" onChange={this.ChangeReferenceName}/><br></br>
                        <label>Reference mobile:</label><br></br>
                        <input type="text" onChange={this.ChangeReferenceMobile}/><br></br><br></br>

                        <input type="checkbox" value="PPPOE" onClick={this.ChangeCheckbox} />
                        <label>PPPOE</label>
                        <input type="checkbox" value="Static" onClick={this.ChangeCheckbox} />
                        <label>Static</label>
                        <input type="checkbox" value="Hotspot" onClick={this.ChangeCheckbox}/>
                        <label>Hotspot</label>
                        <br /><br />

                        <input type="radio" name="Ra" value="Yes"onClick={this.ChangeRadio}/>
                        <label>Yes</label>
                        <input type="radio" name="Ra" value="No"onClick={this.ChangeRadio}/>
                        <label>No</label><br></br><br></br>
                        <button onClick={this.display}>Register</button>



                    </form>
                </div>
            </section>
        );
    }
}
export default Form;