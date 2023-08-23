import { createContext } from "react";

export const DB_products = createContext()

export const DB_products_provider = ({children}) => {

    const databaseProducts = {
    
        men: {
            shirts: [
                {category: "shirts", id: "male-shirt-1", title: "Men Shirt ", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/male/shirts/1.webp" ,"/images/products/male/shirts/1b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black", "blue", "green"] },
                {category: "shirts", id: "male-shirt-2", title: "Men Shirt ", price: 2000.00,  stock: 2   ,popular: true,  new: false,  imgURL: ["/images/products/male/shirts/2.webp", "/images/products/male/shirts/2b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black", "orange"] },
                {category: "shirts", id: "male-shirt-3", title: "Men Shirt ", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/male/shirts/3.webp", "/images/products/male/shirts/3b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "gray"] },
                {category: "shirts", id: "male-shirt-4", title: "Men Shirt ", price: 4000.20,  stock: 8   ,popular: false, new: true,  imgURL: ["/images/products/male/shirts/4.webp", "/images/products/male/shirts/4b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black",] },
                {category: "shirts", id: "male-shirt-5", title: "Men Shirt ", price: 5000.00,   stock: 3   ,popular: true,  new: false,  imgURL: ["/images/products/male/shirts/5.webp", "/images/products/male/shirts/5b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "yellow", "red"] },
            ],
            pants: [
                {category: "pants", id: "male-pant-1", title: "Men Pant", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/male/pants/1.webp", "/images/products/male/pants/1b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "blue", "green"] },
                {category: "pants", id: "male-pant-2", title: "Men Pant", price: 2000.00,  stock: 2   ,popular: true,  new: false,  imgURL: ["/images/products/male/pants/2.webp", "/images/products/male/pants/2b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] ,availableColors: ["white", "black",]  },
                {category: "pants", id: "male-pant-3", title: "Men Pant", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/male/pants/3.webp", "/images/products/male/pants/3b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "blue", "green"] },
            ],
            shoes: [
                {category: "shoes", id: "male-shoe-1", title: "Men Shoe", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/male/shoes/1.webp", "/images/products/male/shoes/1b.webp"], availableSizes: [36, 37, 38, 39, 40, 41, 42, 43, 44] , availableColors: ["white", "black", "blue", "green"] },
                {category: "shoes", id: "male-shoe-2", title: "Men Shoe", price: 2000.00,  stock: 5   ,popular: true,  new: false,  imgURL:[ "/images/products/male/shoes/2.jpg",  "/images/products/male/shoes/2b.webp"], availableSizes: [37, 38, 39, 40, 41], availableColors: ["white", "black", "blue", "green"] },
                {category: "shoes", id: "male-shoe-3", title: "Men Shoe", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/male/shoes/3.webp", "/images/products/male/shoes/3b.webp"], availableSizes: [36, 37, 38, 39, 40, 41, 42, 43, 44], availableColors: ["white", "black",]  },
                {category: "shoes", id: "male-shoe-4", title: "Men Shoe", price: 3000.50,   stock: 12  ,popular: false, new: true,  imgURL: ["/images/products/male/shoes/4.webp", "/images/products/male/shoes/4b.webp"], availableSizes: [37, 38, 39, 40, 41], availableColors: ["white", "black", "orange"] },
            ]
        },

        women: {
            shirts: [
                {category: "shirts", id: "female-shirt-1", title: "Women Shirt", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/female/shirts/1.webp", "/images/products/female/shirts/1b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "blue", "green"] },
                {category: "shirts", id: "female-shirt-2", title: "Women Shirt", price: 2000.00,  stock: 4   ,popular: true,  new: false,  imgURL: ["/images/products/female/shirts/2.webp", "/images/products/female/shirts/2b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"], availableColors:  ["white", "black", "blue", "green"] },
                {category: "shirts", id: "female-shirt-3", title: "Women Shirt", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL:[ "/images/products/female/shirts/3.webp",  "/images/products/female/shirts/3b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"], availableColors: ["white", "black", "orange"]  },
                {category: "shirts", id: "female-shirt-4", title: "Women Shirt", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL:[ "/images/products/female/shirts/4.jpg",  "/images/products/female/shirts/4b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black", "orange"]  },
            ],
            pants: [
                {category: "pants", id: "female-pant-1", title: "Women Pants", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/female/pants/1.webp", "/images/products/female/pants/1b.webp"],availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "yellow", "red"] },
                {category: "pants", id: "female-pant-2", title: "Women Pants", price: 2000.00,  stock: 2   ,popular: true,  new: false,  imgURL: ["/images/products/female/pants/2.webp", "/images/products/female/pants/2b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "yellow", "red"]},
                {category: "pants", id: "female-pant-3", title: "Women Pants", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/female/pants/3.webp", "/images/products/female/pants/3b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"], availableColors: ["white", "black", "blue", "green"] },
            ],
            shoes: [
                {category: "shoes", id: "female-shoe-1", title: "Women Shoe", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/female/shoes/1.webp", "/images/products/female/shoes/1b.webp"], availableSizes: [36, 37, 38, 39, 40, 41, 42, 43, 44] , availableColors: ["white", "black",]  },
                {category: "shoes", id: "female-shoe-2", title: "Women Shoe", price: 2000.00,  stock: 2   ,popular: true,  new: false,  imgURL: ["/images/products/female/shoes/2.webp", "/images/products/female/shoes/2b.webp"], availableSizes: [37, 38, 39, 40, 41], availableColors: ["white", "black", "blue", "green"] },
                {category: "shoes", id: "female-shoe-3", title: "Women Shoe", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL:[ "/images/products/female/shoes/3.jpg",  "/images/products/female/shoes/3b.jpg"], availableSizes: [37, 38, 39, 40, 41], availableColors: ["white", "black", "blue", "green"] },
                {category: "shoes", id: "female-shoe-4", title: "Women Shoe", price: 2000.00,  stock: 2   ,popular: true,  new: false,  imgURL: ["/images/products/female/shoes/4.webp", "/images/products/female/shoes/4b.jpg"], availableSizes: [36, 37, 38, 39, 40, 41, 42, 43, 44] , availableColors: ["white", "black",] },
                {category: "shoes", id: "female-shoe-5", title: "Women Shoe", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/female/shoes/5.webp", "/images/products/female/shoes/5b.webp", ], availableSizes: [37, 38, 39, 40, 41], availableColors: ["white", "black", "yellow", "red"]},
            ]
        },

        youngs: {
            shirts: [
                {category: "shirts", id: "young-shirt-1", title: "young Shirt", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/youngs/shirts/1.webp", "/images/products/youngs/shirts/1b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black",] },
                {category: "shirts", id: "young-shirt-2", title: "young Shirt", price: 2000.00,  stock: 2   ,popular: true,  new: false,  imgURL: ["/images/products/youngs/shirts/2.webp", "/images/products/youngs/shirts/2b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black", "orange"] },
                {category: "shirts", id: "young-shirt-3", title: "young Shirt", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/youngs/shirts/3.webp", "/images/products/youngs/shirts/3b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black", "blue", "green"]},
                {category: "shirts", id: "young-shirt-4", title: "young Shirt", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/youngs/shirts/4.webp", "/images/products/youngs/shirts/4b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "blue", "green"]},
            ],
            pants: [
                {category: "pants", id: "young-pant-1", title: "young Pant", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/youngs/pants/1.webp", "/images/products/youngs/pants/1b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "orange"] },
                {category: "pants", id: "young-pant-2", title: "young Pant", price: 2000.00,  stock: 4   ,popular: true,  new: false,  imgURL: ["/images/products/youngs/pants/2.webp", "/images/products/youngs/pants/2b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black", "blue", "green"]},
                {category: "pants", id: "young-pant-3", title: "young Pant", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/youngs/pants/3.webp", "/images/products/youngs/pants/3b.webp"], availableSizes: ["sm", "md", "lg", "xl", "xxl"] , availableColors: ["white", "black", "blue", "green"]},
                {category: "pants", id: "young-pant-4", title: "young Pant", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/youngs/pants/4.webp", "/images/products/youngs/pants/4b.webp"], availableSizes: [ "md" ,"lg", "xl"] ,availableColors: ["white", "black",] },
            ],
            shoes: [
                {category: "shoes", id: "young-shoe-1", title: "young Shoe", price: 1000.00,   stock: 7   ,popular: false, new: true,  imgURL: ["/images/products/youngs/shoes/1.webp", "/images/products/youngs/shoes/1b.webp"], availableSizes: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25] , availableColors: ["white", "black", "yellow", "red"]},
                {category: "shoes", id: "young-shoe-2", title: "young Shoe", price: 2000.00,  stock: 1   ,popular: true,  new: false,  imgURL: ["/images/products/youngs/shoes/2.webp", "/images/products/youngs/shoes/2b.webp"], availableSizes: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], availableColors: ["white", "black", "blue", "green"]},
                {category: "shoes", id: "young-shoe-3", title: "young Shoe", price: 3000.50,   stock: 20  ,popular: false, new: true,  imgURL: ["/images/products/youngs/shoes/3.webp", "/images/products/youngs/shoes/3b.webp"], availableSizes: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25] , availableColors: ["white", "black",] },
            ]
        }
    }
    
    return(
        <DB_products.Provider value={{databaseProducts}}>
            {children}
        </DB_products.Provider>
    )
}