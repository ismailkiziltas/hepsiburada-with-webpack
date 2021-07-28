// Mock Data
import { categories } from './data';

// Selector
import Selector from './selector';

const Category = {
    init: () => {
        Category.create.DOM();
    },

    create: {
        DOM: () => {
            categories.forEach((item) => {
                Category.create.tree(item);
            });
        },

        tree: (item) => {
            document.querySelector(Selector.categories).appendChild(Category.create.item(item))
        },

        item: (item) => {
            const categoryItem = document.createElement("li");
            categoryItem.className = Selector.classes.categories.item;
            categoryItem.innerHTML += `<a href="${item.url}" class="${Selector.classes.categories.link}">${item.title}</a>`;

            if(item.children) {
                const categoriesList = document.createElement("ul");
                const categoriesNav = document.createElement("nav");
                categoriesNav.className = Selector.classes.categories.children.nav;
                categoriesList.className = Selector.classes.categories.children.list;

                item.children.forEach((child) => {
                    categoriesList.innerHTML += `<li class="${Selector.classes.categories.children.item}">
                        <a class="${Selector.classes.categories.children.link}" href="${child.url}">${child.title}</a>
                    </li>`
                });
                
                categoriesNav.appendChild(categoriesList);
                categoryItem.appendChild(categoriesNav);
            }
        
            return categoryItem;
        },

    },
};

export default Category;