import React, {Component} from 'react';
import {Link} from 'react-router-dom';  
import Update_event from './update_event';
class Home extends Component{
    constructor(props)
    {
        super(props);
    }
    
    
    render()
    {
        return(

            <div>
                <Link to="/add_event">
                    <button>
                        Add Event
                    </button>
                </Link>
                <br/>
                <Link to="/update_event">
                    <button>
                        Update Event
                    </button>
                </Link>
            </div>

        )
    }
}
export default Home;
