import Product from "./Product";
import { useState, useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
// import '../UI/ProductDisplay.css'


function ProductList({ searchText, dropDownSelectedValues, selectedProducts }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const resData = await response.json();
                if (response.ok) {
                    setProducts(resData);
                }
            } catch (error) {
                toast.error('Error fetching data:');
            }
        };

        fetchData();
    }, []);




    const displaySeachedProducts = useMemo(() => {
        let computedProducts = products;

        if (searchText.length > 0) {
            computedProducts = computedProducts.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()) || product.description.toLowerCase().includes(searchText.toLowerCase()))


        }
        if (dropDownSelectedValues.length > 0) {
            const selectedCategoryStrings = dropDownSelectedValues.map((value) => value.value)
            computedProducts = computedProducts.filter((product) => selectedCategoryStrings.includes(product.category))
        }
        return computedProducts;
    }, [products, dropDownSelectedValues, searchText])





    return (
        <div className="products-container container-default">
            {displaySeachedProducts.map((product) => (
                <Product
                    key={product.id}
                    productId={product.id}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.image}
                    description={product.description}
                    selectedProducts={selectedProducts}

                />
            ))}

        </div>
    )

}

export default ProductList;