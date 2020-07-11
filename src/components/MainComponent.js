import React,{Component} from 'react';
import Header from './HeaderComponent';
import Sliding from './SlidingComponent';
import Footer from './FooterComponent';


 class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sliding/>
                <Footer/>
            </div>
        );
    }
}

export default Main;
