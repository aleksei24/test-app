// ==================================================================
// items data
const menu = [
  {
    id: 1,
    title: 'chair 01',
    category: 'chairs',
    price: 7.49,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778605/samples/my-choose-app/chair-01_wpx7kd.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 2,
    title: 'chair 02',
    category: 'chairs',
    price: 6.99,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778605/samples/my-choose-app/chair-02_x0kspy.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 3,
    title: 'chair 03',
    category: 'chairs',
    price: 7.99,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778605/samples/my-choose-app/chair-03_vnseie.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 4,
    title: 'wardrobe 01',
    category: 'wardrobes',
    price: 32.49,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778606/samples/my-choose-app/wardrobe-01_pwmnyg.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 5,
    title: 'wardrobe 02',
    category: 'wardrobes',
    price: 37.99,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778606/samples/my-choose-app/wardrobe-02_dguhgj.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 6,
    title: 'wardrobe 03',
    category: 'wardrobes',
    price: 33.19,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778606/samples/my-choose-app/wardrobe-03_pw1zh4.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 7,
    title: 'desk 01',
    category: 'desks',
    price: 17.49,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778606/samples/my-choose-app/desk-01_kncwwl.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 8,
    title: 'desk 02',
    category: 'desks',
    price: 15.99,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778605/samples/my-choose-app/desc-02_m713qv.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
  {
    id: 9,
    title: 'desk 03',
    category: 'desks',
    price: 18.89,
    img: 'https://res.cloudinary.com/dn6x2uyx5/image/upload/v1635778606/samples/my-choose-app/desc-03_hv7u4u.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, quo! Ducimus cum, officiis explicabo soluta facilis modi quasi impedit veritatis autem, sint tenetur.',
  },
];

const displayApp = document.querySelector('.display-app');
const btnsApp = document.querySelector('.btns-app');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);

  displayChoiceBtns();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
      <article class="display-app__item item-app">
        <div class="item-app__img">
          <img src="${item.img}" alt="${item.title}" />
        </div>
        <div class="item-app__info info-app">
          <div class="info-app__top">
            <h4>${item.title}</h4>
            <span>$${item.price}</span>
          </div>
          <div class="info-app__text">
            <p>
              ${item.description}
            </p>
          </div>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join('');
  displayApp.innerHTML = displayMenu;
}

function displayChoiceBtns() {
  const menuCategories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );

  const categoryBtns = menuCategories
    .map(function (category) {
      return `
      <button type="button" class="btns-app__choose" data-category="${category}">${category}</button>
    `;
    })
    .join('');
  btnsApp.innerHTML = categoryBtns;
  const chooseBtns = btnsApp.querySelectorAll('.btns-app__choose');
  chooseBtns.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      const itemsCategory = e.currentTarget.dataset.category;
      const btnsCategory = menu.filter(function (item) {
        if (item.category === itemsCategory) {
          return item;
        }
      });
      if (itemsCategory === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(btnsCategory);
      }
    });
  });
}
