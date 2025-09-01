// Menu items data array
const menu = [
    {
        id: 1,
        title: "فطائر اللبن الرائب",
        category: "فطور",
        price: 5.99,
        img: "buttermilkPancake.jpeg",
        desc: "فطائر هشة تقدم مع شراب القيقب والزبدة."
    },
    {
        id: 2,
        title: "لحم مقدد وبيض",
        category: "فطور",
        price: 6.99,
        img: "bacon&egg.jpeg",
        desc: "لحم مقدد وبيض كلاسيكي مع خبز محمص."
    },
    {
        id: 3,
        title: "عجة بالجبن",
        category: "فطور",
        price: 4.99,
        img: "omlet.jpeg",
        desc: "عجة بالجبن مع أعشاب طازجة."
    },
    {
        id: 4,
        title: "برجر دجاج",
        category: "غداء",
        price: 8.99,
        img: "chickenBurger.jpeg",
        desc: "برجر دجاج مشوي مع خس وطماطم."
    },
    {
        id: 5,
        title: "برجر مكسيكي",
        category: "غداء",
        price: 9.49,
        img: "mexicanoBurger.jpeg",
        desc: "برجر لحم بقري مكسيكي حار."
    },
    {
        id: 6,
        title: "سلطة يونانية",
        category: "غداء",
        price: 7.99,
        img: "greekSalad.jpeg",
        desc: "سلطة طازجة مع جبنة فيتا وزيتون."
    },
    {
        id: 7,
        title: "برياني دجاج تيكا",
        category: "عشاء",
        price: 12.99,
        img: "chickenTikkaBiryani.jpeg",
        desc: "أرز عطري مع قطع دجاج تيكا."
    },
    {
        id: 8,
        title: "بيتزا ببروني",
        category: "عشاء",
        price: 11.99,
        img: "pepperoniPizza.jpeg",
        desc: "بيتزا كلاسيكية مع ببروني وجبن."
    },
    {
        id: 9,
        title: "شريحة لحم",
        category: "عشاء",
        price: 15.99,
        img: "steack.jpeg",
        desc: "شريحة لحم مشوية طرية."
    },
    {
        id: 10,
        title: "ساندويتش فيليه اللحم",
        category: "عشاء",
        price: 13.99,
        img: "steakFilletSandwich.jpeg",
        desc: "فيليه لحم طري في ساندويتش طازج."
    },
    {
        id: 11,
        title: "بيني أرابياتا",
        category: "عشاء",
        price: 10.99,
        img: "penneArabiata.jpeg",
        desc: "مكرونة بيني بصلصة الطماطم الحارة."
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
        const menuCategory = category === 'الكل' ? menu : menu.filter(function (item) {
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
    }, ['الكل']);
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
            if (category === 'الكل') {
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
