// import React from 'react' 
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import React, {useState,useEffect} from 'react'

const Section = () => {

const[products,setProducts]=useState([])

useEffect(()=>{
    fetch('http://localhost:2020/products')
    .then(res=>res.json())
    .then(info=>
        setProducts(info)
        )
})



  return (
<>

<div className='searchBox'>
<input className='search' type="text" placeholder='name search' />



</div>

<section style={{display:'flex'}}>

<>



{products && products.map((product)=>(



<div className='sectionmainBox'>

    <div className='sectionBox'>

        <div>
             <div><SportsBaseballIcon style={{fontSize:'50px'}}/></div>
            <h3>{product.name}</h3>
            <br />
            <p>{product.Title}</p>
            <br />
           <span> price:{product.Price}</span>
           
           <br />
           <br />
           <button className='deleteBtn'>Delete</button>
        </div>
    </div>
</div>

))}











</>




</section>




</>
  )
}

export default Section