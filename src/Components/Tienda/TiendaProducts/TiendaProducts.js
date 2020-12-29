import React, { useEffect, useState } from 'react';
import SpinnerLoad from '../../Shared/SpinnerLoad/SpinnerLoad';
import TiendaProduct from './TiendaProduct';

const TiendaProducts = (props) => {
    const [tiendaProducts, setTiendaProducts] = useState([]);
    const [spinner, setSpinner] = useState({
        spninner:false,
        products: true
    })
    useEffect(() => {
        fetch('http://localhost:5000/tiendaProducts')
        .then(res => res.json())
        .then(data => setTiendaProducts(data))
    }, [])
    useEffect(() => {

        let newSpinner = {...spinner};
        if(tiendaProducts.length === 0){
            newSpinner.spninner = true
            newSpinner.products = false
            setSpinner(newSpinner)
        }else{
            newSpinner.spninner = false
            newSpinner.products = true
            setSpinner(newSpinner)
        }


    }, [tiendaProducts])
    
    
    return (
        <div>
           {spinner.spninner && <SpinnerLoad/>}
           {spinner.products && <div className="row pr-5">
            {
                tiendaProducts.map(data => <TiendaProduct data={data} />)
            }
           </div>}
           
        </div>
    );
};

export default TiendaProducts;