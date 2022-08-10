const products = {
    // name of array is inventory
    inventory:[
    {
        // must have id!
        id: 1,
        productName: 'Monstera', 
        inStock: 50, 
        availStock: [
            {
                // main variation : size
                // ADD DISCRIPTION
                size: "Small",
                price: 50,
                qty: 15, 
                variations: [
                    {
                        pot1: 2, 
                        pot2: 1, 
                        pot3: 2
                    }
                ]
            }, 
            {
                size: "Medium", 
                price: 100,
                qty: 20, 
                variations: [
                    {
                        pot1: 10, 
                        pot2: 5, 
                        pot3: 5
                    }
                ]
            },
            {
                size: "Large", 
                price: 150,
                qty: 15, 
                variations: [
                    {
                        pot1: 5, 
                        pot2: 5, 
                        pot3: 5
                    }
                ]
            }
        ]       
    },
    {
        id: 2,
        productName: 'Scindapsus Pictus', 
        inStock: 20, 
        availStock: [
            {
                size: "Small", 
                price: 70,
                qty: 10, 
                variations: [
                    {
                        pot1: 5, 
                        pot2: 2, 
                        pot3: 3
                    }
                ]
            },
            {
                size: "Medium", 
                price: 115,
                qty: 7, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 3, 
                        pot3: 0
                    }
                ]
            },
            {
                size: "Large", 
                price: 150,
                qty: 3, 
                variations: [
                    {
                        pot1: 3, 
                        pot2: 0, 
                        pot3: 0
                    }
                ]
            }
        ]       
    },
    {
        id: 3,
        productName: 'Zeylanica', 
        inStock: 30, 
        availStock: [
            {
                size: "Small", 
                price: 50,
                qty: 5, 
                variations: [
                    {
                        pot1: 1, 
                        pot2: 2, 
                        pot3: 2
                    }
                ]
            },
            {
                size: "Medium", 
                price: 100,
                qty: 10, 
                variations: [
                    {
                        pot1: 5, 
                        pot2: 2, 
                        pot3: 3
                    }
                ]
            },
            {
                size: "Large", 
                price: 125,
                qty: 15, 
                variations: [
                    {
                        pot1: 8, 
                        pot2: 5, 
                        pot3: 2
                    }
                ]
            }
        ]       
    },
    {
        id: 4,
        productName: 'Monstera Minima', 
        inStock: 25, 
        availStock: [
            {
                size: "Small", 
                price: 60,
                qty: 10, 
                variations: [
                    {
                        pot1: 5, 
                        pot2: 5, 
                        pot3: 0
                    }
                ]
            },
            {
                size: "Medium", 
                price: 90,
                qty: 10, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 4, 
                        pot3: 2
                    }
                ]
            },
            {
                size: "Large", 
                price: 110,
                qty: 5, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 1, 
                        pot3: 0
                    }
                ]
            }
        ]       
    },
    {
        id: 5,
        productName: 'Alocasia Macrorrhiza', 
        inStock: 15, 
        availStock: [
            {
                size: "Small", 
                price: 80,
                qty: 4, 
                variations: [
                    {
                        pot1: 1, 
                        pot2: 2, 
                        pot3: 1
                    }
                ]
            },
            {
                size: "Medium", 
                price: 120,
                qty: 6, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 1, 
                        pot3: 1
                    }
                ]
            },
            {
                size: "Large", 
                qty: 130, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 0, 
                        pot3: 1
                    }
                ]
            }
        ]       
    },
    {
        id: 6,
        productName: 'Philodendron Red Cherry', 
        inStock: 18, 
        availStock: [
            {
                size: "Small", 
                price: 50,
                qty: 10, 
                variations: [
                    {
                        pot1: 5, 
                        pot2: 3, 
                        pot3: 2
                    }
                ]
            },
            {
                size: "Medium", 
                price: 100,
                qty: 8, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 3, 
                        pot3: 1
                    }
                ]
            },
            {
                size: "Large", 
                price: 120,
                qty: 0, 
                variations: [
                    {
                        pot1: 0, 
                        pot2: 0, 
                        pot3: 0
                    }
                ]
            }
        ]       
    },
    {
        id: 7,
        productName: 'Cordyline Fruticosa', 
        inStock: 10, 
        availStock: [
            {
                size: "Small", 
                price: 40,
                qty: 4, 
                variations: [
                    {
                        pot1: 2, 
                        pot2: 2, 
                        pot3: 0
                    }
                ]
            },
            {
                size: "Medium", 
                price: 80,
                qty: 4, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 0, 
                        pot3: 0
                    }
                ]
            },
            {
                size: "Large", 
                price: 100,
                qty: 2, 
                variations: [
                    {
                        pot1: 1, 
                        pot2: 0, 
                        pot3: 1
                    }
                ]
            }
        ]       
    },
    {
        id: 8,
        productName: 'Golden Pothos', 
        inStock: 10, 
        availStock: [
            {
                size: "Small", 
                price: 50,
                qty: 5, 
                variations: [
                    {
                        pot1: 1, 
                        pot2: 2, 
                        pot3: 2
                    }
                ]
            },
            {
                size: "Medium", 
                price: 100,
                qty: 4, 
                variations: [
                    {
                        pot1: 2, 
                        pot2: 1, 
                        pot3: 1
                    }
                ]
            },
            {
                size: "Large", 
                price: 125,
                qty: 1, 
                variations: [
                    {
                        pot1: 0, 
                        pot2: 0, 
                        pot3: 1
                    }
                ]
            }
        ]       
    },
    {
        id: 9,
        productName: 'Snake Plant', 
        inStock: 25, 
        availStock: [
            {
                size: "Small", 
                price: 65,
                qty: 10, 
                variations: [
                    {
                        pot1: 5, 
                        pot2: 3, 
                        pot3: 2
                    }
                ]
            },
            {
                size: "Medium", 
                price: 100,
                qty: 10, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 3, 
                        pot3: 3
                    }
                ]
            },
            {
                size: "Large", 
                price: 130,
                qty: 5, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 0, 
                        pot3: 1
                    }
                ]
            }
        ]       
    },
    {
        id: 10,
        productName: 'Peperomia Polybotrya', 
        inStock: 30, 
        availStock: [
            {
                size: "Small", 
                price: 50,
                qty: 15, 
                variations: [
                    {
                        pot1: 8, 
                        pot2: 2, 
                        pot3: 5
                    }
                ]
            },
            {
                size: "Medium", 
                price: 100,
                qty: 10, 
                variations: [
                    {
                        pot1: 4, 
                        pot2: 3, 
                        pot3: 3
                    }
                ]
            },
            {
                size: "Large", 
                price: 120,
                qty: 5, 
                variations: [
                    {
                        pot1: 2, 
                        pot2: 2, 
                        pot3: 1
                    }
                ]
            }
        ]       
    }

], 
};

// exporting products variable
module.exports = products;
