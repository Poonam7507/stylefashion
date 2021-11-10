// import Home from './Home';
import Card from './Card';
import ReactDOM from 'react-dom';

import kurti1 from '../assets/kurti1.jpg';
import kurti2 from '../assets/kurti2.jpg';
import  kurti3 from '../assets/kurti3.jpg';
import  kurti4 from '../assets/kurti4.jpg';
import  kurti5 from '../assets/kurti5.jpg';
import  kurti6 from '../assets/kurti6.jpg';
import  kurti7 from '../assets/kurti7.jpg';
import  kurti8 from '../assets/kurti8.jpg';

const product=()=>{
const arr=[
    {
        id:1,
        product_name:"kurti",
        price:'$250',
        // link:"../assets/kurti1.jpg"
        image: <img src={kurti1}/>


    },
    {
        id:2,
        product_name:'kurti',
        price:'$250',
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>
        image:<img src={kurti2}/>


    },
    {
        id:3,
        product_name:'Kurti',
        price:'$250',
        image:<img src={kurti3}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:4,
        product_name:'Kurti',
        price:'$250',
        image:<img src={kurti4}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:5,
        product_name:'Kurti',
        price:'$250',
        image:<img src={kurti5}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },
    {
        id:6,
        product_name:'Kurti',
        price:'$250',
        image:<img src={kurti6}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },{
        id:7,
        product_name:'Kurti',
        price:'$250',
        image:<img src={kurti7}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    },{
        id:8,
        product_name:'Kurti',
        price:'$250',
        image:<img src={kurti8}/>
        // link:<img src={require('../assets/kurti3.jpg')} alt="kurti"/>


    }
]
return(
    <div className="product" >{
        arr.map((arr,id)=>{
            return <Card key={id} image={arr.image} product_name={arr.product_name} price={arr.price} />
        
        })
    }
    </div>
    )
    }

    

export default product;