import React from "react";

class Toggler extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let id2 = this.props.id2 ? this.props.id2 : this.props.id;
        let active = this.props.active ? this.props.active : "active";
        document.getElementById(this.props.id).addEventListener("click", () => {
            let id2Node = document.getElementById(id2)
            if (id2Node.classList.contains(active)) {
                id2Node.classList.remove(active)
            } else {
                id2Node.classList.add(active)
            }
        })
    }
    render(){
        return(
            <div id={this.props.id}>
                {this.props.content}
            </div>
            )
    }
}

export default Toggler;