import React, { Component } from 'react'
export const sittingsContext= React.createContext()


export class settings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flag: true,
            NumberItemsDisplay:2,
            default:'OLD TO NEW'
             
        }
    }

    render() {
        return (
            <>
            <sittingsContext.Provider value={this.state}>
                {this.props.children}


            </sittingsContext.Provider>
            
            </>
                
            
        )
    }
}

export default settings
