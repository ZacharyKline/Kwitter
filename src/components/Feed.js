import React, {Component} from 'react';
import {Feed, Card} from 'semantic-ui-react'

class Feed extends Component {
    state = {
        messages: [],

    }

    render(){
        return(
            <React.Fragment>
                <Feed>
                    <Feed.Event>



                    </Feed.Event>
                </Feed>
            </React.Fragment>
        )
    }

}