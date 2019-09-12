import React, {Component} from 'react';
import axios from 'axios';
class Update_event extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            total:[],
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
        this.handlechange=this.handlechange.bind(this);
        this.handlechangeofdata=this.handlechangeofdata.bind(this);
        this.handlechangeofevents=this.handlechangeofevents.bind(this);
    }

    handlechange=(e)=>{
        axios.get('https://us-central1-confluence19.cloudfunctions.net/api/events?category='+e.target.value)
            .then(res=>{
                    this.setState({
                        total:res.data.data.events   
                    });
                    console.log(res.data.data.events);
            });
            
    }

    handlechangeofevents=(e=>{
        let id=e.target.value;
        let eve=this.state.total[id];
        this.setState({
            event_name:eve.eventName,
            rules:eve.rules,
            coordinators:eve.coordinators,
            description:eve.description,
            starttime:eve.starttime,
            venue:eve.venue,
            endtime:eve.endtime,
            prize:eve.prize
        });
    })

    handlechangeofdata=(e=>{
        let nam=e.target.name;
        let val=e.target.value;
        this.setState({
            [nam]:val
        });
        console.log(val);
    })

    render()
    {

        let category=["Select Category","photography", "dance", "music", "dramatics", "informal", "finearts"];

        let events=category.map((eve)=>{
            return(
                <option value={eve}> {eve} </option>
            );
            
        });

        let event_name=(this.state.total.length)?
                (
                    this.state.total.map((eve, index)=>{
                        return(
                            <option value={index}>{eve.eventName}</option>
                        );                             
                    })
                    
                ):(null)

        return(
            <div>
                <form>
                    <select onChange={this.handlechange}>
                        {events}
                    </select>
                    <br/>
                    <select onChange={this.handlechangeofevents}>
                        <option>Select Event </option>
                        {event_name}
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
export default Update_event; 