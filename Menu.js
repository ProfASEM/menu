// Menu items data array
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancake",
        category: "Breakfast",
        price: 5.99,
        img: "buttermilkPancake.jpeg",
        desc: "Fluffy pancakes served with syrup and butter."
    },
    {
        id: 2,
        title: "Bacon & Egg",
        category: "Breakfast",
        price: 6.99,
        img: "bacon&egg.jpeg",
        desc: "Classic bacon and eggs with toast."
    },
    {
        id: 3,
        title: "Omlet",
        category: "Breakfast",
        price: 4.99,
        img: "omlet.jpeg",
        desc: "Cheese omelet with fresh herbs."
    },
    {
        id: 4,
        title: "Chicken Burger",
        category: "Lunch",
        price: 8.99,
        img: "chickenBurger.jpeg",
        desc: "Grilled chicken burger with lettuce and tomato."
    },
    {
        id: 5,
        title: "Mexicano Burger",
        category: "Lunch",
        price: 9.49,
        img: "mexicanoBurger.jpeg",
        desc: "Spicy Mexican-style beef burger."
    },
    {
        id: 6,
        title: "Greek Salad",
        category: "Lunch",
        price: 7.99,
        img: "greekSalad.jpeg",
        desc: "Fresh salad with feta cheese and olives."
    },
    {
        id: 7,
        title: "Chicken Tikka Biryani",
        category: "Dinner",
        price: 12.99,
        img: "chickenTikkaBiryani.jpeg",
        desc: "Aromatic rice with chicken tikka pieces."
    },
    {
        id: 8,
        title: "Pepperoni Pizza",
        category: "Dinner",
        price: 11.99,
        img: "pepperoniPizza.jpeg",
        desc: "Classic pizza topped with pepperoni and cheese."
    },
    {
        id: 9,
        title: "Steak",
        category: "Dinner",
        price: 15.99,
        img: "steack.jpeg",
        desc: "Juicy grilled steak cooked to perfection."
    },
    {
        id: 10,
        title: "Steak Fillet Sandwich",
        category: "Dinner",
        price: 13.99,
        img: "steakFilletSandwich.jpeg",
        desc: "Tender steak fillet in a fresh sandwich."
    },
    {
        id: 11,
        title: "Penne Arabiata",
        category: "Dinner",
        price: 10.99,
        img: "penneArabiata.jpeg",
        desc: "Penne pasta in spicy tomato sauce."
    }
];

// Select DOM elements
const sectionCenter = document.querySelector('.menu');
const filterBtns = document.querySelectorAll('.filter-btn');

// Load all menu items when the page loads
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});

// Filter buttons event listeners
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // Get the category from the button's data-id
        const category = e.currentTarget.dataset.id;
        // Filter menu items based on category
        const menuCategory = category === 'all' ? menu : menu.filter(function (item) {
            return item.category === category;
        });
        // Display filtered menu items
        displayMenuItems(menuCategory);
        
    });
});

// Function to display menu items
function displayMenuItems(menuItems) {
    // Map each menu item to its HTML card
    let displayMenu = menuItems.map(function (item) {
        return `<article class="card">
            <div class="img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="description">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <div class="info">
                    <p>${item.desc}</p>
                </div>
            </div>
        </article>`;
    });
    // Join all cards and set as innerHTML
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

const Menu = document.querySelector('.menu');
const buttons = document.querySelectorAll(".filter-btn");

// load items

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['all']);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" data-id="${category}">${category}</button>`
    }).join("");
    buttons.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    // filter items

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem
                }
            });
            if (category === 'all') {
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory)
            }

        })
    });
});









function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
        return `<div class="card">
        <div class="img">
            <img src=${item.img} alt="">
        </div>
        <div class="description">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="info">
                ${item.desc}
            </p>
        </div>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    Menu.innerHTML = displayMenu;

   
}
