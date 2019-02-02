import React, { Component } from 'react';
import './home.css';
import download from '../assests/download.jpeg'
import vidhyaSagar from '../assests/vidhyaSagar.jpeg'
import jivanParichy from '../assests/jivanParichay.jpg'
import HomePagePhoto from '../assests/homePagePhoto.jpg'

import {
  UncontrolledCarousel
} from 'reactstrap';

const items = [
  {
    src: download
  },
  { src: vidhyaSagar }
]
const Carousel = () => <div className="col-10 col-lg-6 mx-auto center-block"><UncontrolledCarousel items={items} /></div>;

class Home extends Component {
  render() {
    return (
      <div>

        {/* <Carousel></Carousel> */}

        <img src={HomePagePhoto} className="home-page-photo"></img>
        <h1 className="big-text">जय जिनेन्द्र</h1>
        <div className="row  m-0 container mt-3 jivan-parichay">
          <img src={jivanParichy} className=""></img>
          <div className=" col-lg-7 text">
            <h1 ><u>जीवन परिचय</u></h1>
            <p>१) पूज्यश्री का नाम	- श्रमण मुनि श्री आदित्य सागर जी महाराज
              <br></br>(२) जन्मस्थान	- जबलपुर (म. प्र.)
            (३) जन्मतिथि व दिनाँक	- २४ मई, १९८६


(४) जाति	- परवार जैन


(५)

माता का नाम - श्रीमति वीणा जैन
पिता का नाम - श्री राजेश कुमार जैन

(६) लौकिक शिक्षा	- बी. बी. ए., एम. बी. ए. (गोल्ड मेडल प्राप्त)


(७) आजीवन ब्रह्मचर्य व्रत/प्रतिमा-व्रत ग्रहण करने का विवरण	- १८-१०-२००८, जबलपुर

द्वारा	- आचार्य श्री विशुद्ध सागर जी महाराज


(८) मुनि दीक्षा तिथि, दिनाँक व स्थान	- ०८-११-२०११ मंगलगिरि तीर्थ, सागर (म. प्र.)

मुनि दीक्षा गुरु	- आचार्य श्री विशुद्ध सागर जी महाराज


(९) साहित्यिक कृतित्व	- आचार्य श्री विशुद्ध सागर जी कृत—इष्टोपदेश भाषय का प्राकृत अनुवाद संकलन—(१) देशना बिन्दु, (२) देशना संचय (३) तत्त्वबोध (प्रकाशित)


(१०) अन्य विशेष जानकारी	- अध्यात्मयोगी आचार्य श्री विशुद्ध सागर जी महाराज के संघ में है।</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;