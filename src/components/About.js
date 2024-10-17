import React from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


class About extends React.Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }
    componentDidMount(){
       // console.log("parent comonent didMount");
    }
    render(){
       // console.log("Parent Render");
        return (
            <div>
            <h1>About CLASS Component</h1>
            <div>
                LoggedIn User 
                <UserContext.Consumer>
                    {({loggedInUser}) => (<h1 className='text-2xl font-bold'>{loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
            <h2>This is a About Finction</h2>
            <UserClass  name={"First"} location={"BALRAMPUR"}/>
            </div>
        );
    };
};

export default About;

