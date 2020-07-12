import React,{Component} from 'react';
import Header from './HeaderComponent';
import Sliding from './SlidingComponent';
import Footer from './FooterComponent';
import SideBarLink from './SideBarLink';


 class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sliding/>
                {/* <SideBarLink/> */}
                <Footer/>
            </div>
        );
    }
}

export default Main;
