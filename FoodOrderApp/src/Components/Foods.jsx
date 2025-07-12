import React from "react";
import { products } from "../products";
import "./Foods.css";

export default function Foods(){
    return(
        <div className="products-container">
            <div className="food-card">
                {products.filter(product => product.category === "Food").map((product) => (
                    <div className="food-card-item" key={product.id}>
                        <img src={product.imageUrl} alt={product.name} className="food-image" />
                        <h3 className="food-name">{product.name}</h3>
                        <p className="food-description">{product.description}</p>
                        <p className="food-price">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            
        
        </div>
    )

}