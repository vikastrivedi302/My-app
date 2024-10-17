import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            userInfo:{
               name: "Dummy",
               location:"Default",
        },
    };
        //  console.log(this.props.name+"Child Constructor");
    }

   async componentDidMount(){
       // console.log(this.props.name+"child comonent didMount");

       const data = await fetch("https://api.github.com/users/akshaymarch7");
       const json = await data.json();

       console.log(json);

       this.setState({
        userInfo:json,
       });
       console.log("Child - componentDidMount" + this.props.name);
    }

    componentDidUpdate(prevProps, prevState) {
        if(
            this.state.count !== prevState.count ||
            this.state.count !== prevState.count
        ) {

        }
        console.log("Component Did Update");

    }
    componentWillUnmount(){
        console.log("ComponentWillunmount");
    }

    render(){

        const {name , location , avatar_url} = this.state.userInfo;
        
        // console.log(this.props.name+"Child Render");
        return (
            <div className="user-card">
                <img alt="" src={avatar_url}></img>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h3>Contact: 7376292058 </h3>
            </div>
            );
    }
}

export default UserClass; 