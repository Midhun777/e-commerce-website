const links = ['Home', 'Contact', 'Blog', 'About'];

const navItemsArr = [
    {
        title: "Kids",
        href: "#",
        onclick: "popUp()"
    }
    ,
    {
        title: "Mens",
        href: "pages/mens/index.html",
        onclick: "demo()"

    }
    ,
    {
        title: "Womens",
        href: "pages/womens/index.html",
        onclick: "demo()"

    }
    ,
    {
        title: "Shoes",
        href: "#",
        onclick: "popUp()"
    }
    ,
    {
        title: "Phones",
        href: "#",
        onclick: "demo()"
    }
]

const categoryItems = [
    {
        src: "assets/icons/shirt.png",
        title: "Shirts",
        href:"pages/mens/index.html",
        common: "show more",
        onclick: "demo()",
        navSate : true
    }
    ,
    {
        src: "assets/icons/iphone.png",
        title: "Phones",
        href:"#",
        common: "show more",
        onclick: "popUp()",
        navSate : false


    }
    ,
    {
        src: "assets/icons/sneakers.png",
        title: "Shoes",
        href:"#",
        common: "show more",
        onclick: "popUp()",
        navSate : false


    }
    ,
    {
        src: "assets/icons/party.png",
        title: "Frocks",
        href:"#",
        common: "show more",
        onclick: "popUp()",
        navSate : false
    }
    ,
]

const mensCollection = [
    {
        src: "assets/mens/product_13.png",
        title: "Regular Fit Hoddie Men",
        price: "₹899",
        oldPrice: "₹1199"

    },
    {
        src: "assets/mens/product_14.png",
        title: "Regular Fit Hoddie Men",
        price: "₹599",
        oldPrice: "₹999"

    },
    {
        src: "assets/mens/product_15.png",
        title: "Regular Fit Hoddie Men",
        price: "₹9999",
        oldPrice: "15900"

    },
    {
        src: "assets/mens/product_16.png",
        title: "Regular Fit Hoddie Men",
        price: "₹899",
        oldPrice: "₹1099"

    }
    ,
    {
        src: "assets/mens/product_17.png",
        title: "Regular Fit Hoddie Men",
        price: "₹777",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_19.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_20.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_21.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_22.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_23.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
]

const newCollections = [
    {
        src: "assets/kids/product_25.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_26.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_27.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_28.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_29.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_30.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_31.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_32.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_33.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
    ,
    {
        src: "assets/kids/product_34.png",
        title: "Kids Hoddie Regular",
        price: "₹999",
        oldPrice: "1590"

    }
]

const womensCollections = [
    {
        src: "assets/women/product_1.png",
        title: " Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }
    ,
    {
        src: "assets/women/product_2.png",
        title: " Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }
    ,
    {
        src: "assets/women/product_3.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }
    ,
    {
        src: "assets/women/product_5.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }
    ,
    {
        src: "assets/women/product_6.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }
    ,
    {
        src: "assets/women/product_7.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }
    ,
    {
        src: "assets/women/product_8.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }

    ,
    {
        src: "assets/women/product_9.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }

    ,
    {
        src: "assets/women/product_10.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }

    ,
    {
        src: "assets/women/product_11.png",
        title: "Womens Regular",
        price: "₹999",
        oldPrice: "1590"
    }

]

const mensPageCollection = [
    {
        src: "assets/mens/product_13.png",
        title: "Regular Fit Hoddie Men",
        price: "₹899",
        oldPrice: "₹1199"

    },
    {
        src: "assets/mens/product_14.png",
        title: "Regular Fit Hoddie Men",
        price: "₹599",
        oldPrice: "₹999"

    },
    {
        src: "assets/mens/product_15.png",
        title: "Regular Fit Hoddie Men",
        price: "₹9999",
        oldPrice: "15900"

    },
    {
        src: "assets/mens/product_16.png",
        title: "Regular Fit Hoddie Men",
        price: "₹899",
        oldPrice: "₹1099"

    }
    ,
    {
        src: "assets/mens/product_17.png",
        title: "Regular Fit Hoddie Men",
        price: "₹777",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_19.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_20.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_21.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_22.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_23.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_14.png",
        title: "Regular Fit Hoddie Men",
        price: "₹599",
        oldPrice: "₹999"

    },
    {
        src: "assets/mens/product_15.png",
        title: "Regular Fit Hoddie Men",
        price: "₹9999",
        oldPrice: "15900"

    },
    {
        src: "assets/mens/product_16.png",
        title: "Regular Fit Hoddie Men",
        price: "₹899",
        oldPrice: "₹1099"

    }
    ,
    {
        src: "assets/mens/product_17.png",
        title: "Regular Fit Hoddie Men",
        price: "₹777",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_19.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_20.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_21.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_22.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
    ,
    {
        src: "assets/mens/product_23.png",
        title: "Regular Fit Hoddie Men",
        price: "₹7999",
        oldPrice: "15900 "

    }
]

const womensPageCollection = [
    {
        src: "assets/women/product_1.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,

    {
        src: "assets/women/product_2.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_3.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_4.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_5.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_6.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_7.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_8.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_9.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_10.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_11.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_12.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_1.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,

    {
        src: "assets/women/product_2.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_3.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_4.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_5.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_6.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_7.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_8.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_9.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_10.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_11.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }
    ,
    {
        src: "assets/women/product_12.png",
        title: "Regular Fit Women",
        price: "₹899",
        oldPrice: "₹1199"
    }

]