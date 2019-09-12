import React, {Component} from 'react';
import axios from 'axios';
import './formstyle.css';
class Add_event extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            category:"",
            event_name:"",
            rules:"",
            coordinators:[],
            description:"",
            starttime:"",
            venue:"",
            endtime:"",
            prize:""
        }
        this.handlechangeofdata=this.handlechangeofdata.bind(this);
        this.handlechangeevent=this.handlechangeevent.bind(this);
    }

    handlechangeevent=(e)=>{
        this.setState({
            category:e.target.value
        });
    }

    handlechangeofdata=(e)=>{
        let nam=e.target.name;
        let val=e.target.value;
        this.setState({
            [nam]:val
        });
        console.log(val);
    }

    render()
    {
        let category=["Select Category","photography", "dance", "music", "dramatics", "informal", "finearts"];

        let events=category.map((eve)=>{
            return(
                <option value={eve}> {eve} </option>
            )
            
        });

        return(
            <div>
                <form>
                    <select onChange={this.handlechange}>
                        {events}
                    </select>
                    <br/>
                    <input 
                        type="text"  
                        value={this.state.event_name} 
                        placeholder="Event Name"
                        name="event_name" 
                        onChange={this.handlechangeofdata} 
                     />
                     <br/>
                    <textarea 
                        value={this.state.description} 
                        type="text" 
                        placeholder="Description" 
                        name="description" 
                        onChange={this.handlechangeofdata} 
                    />
                    <br/>
                    <textarea 
                        value={this.state.rules}
                        type="text" 
                        placeholder="Rules"
                        name="rules" 
                        onChange={this.handlechangeofdata} 
                    />
                    <br/>
                    <input 
                        value={this.state.venue}
                        type="text" 
                        placeholder="Venue" 
                        name="venue" 
                        onChange={this.handlechangeofdata} 
                    />
                    <br/>
                        <input 
                        value={this.state.prize}
                        type="text" 
                        placeholder="Prizes" 
                        name="prize" 
                        onChange={this.handlechangeofdata} 
                    />
                    <br/>

                    <input type="submit" value="Submit"/>
                 </form>  

                     
            </div>
        )
    }
}
export default Add_event; 