import React,{Component} from 'react';
import Header from './HeaderComponent';
import Sliding from './SlidingComponent';
import Footer from './FooterComponent';
import SideBarLink from './SideBarLink';
import Login from './LoginComponent';


 class Main extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Login/>
                <Sliding/>
                {/* <SideBarLink/> */}
                <Footer/>
            </div>
        );
    }
}

export default Main;
