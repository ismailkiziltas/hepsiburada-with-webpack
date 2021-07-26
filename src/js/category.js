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
            document.querySelector(Selector.categories).appendChild(Category.create.item(item, {
                item: Selector.classes.categories.item,
                link: Selector.classes.categories.link,
                children: {
                    list: Selector.classes.categories.children.list,
                    item: Selector.classes.categories.children.item,
                    link: Selector.classes.categories.children.link
                }
            }))
        },

        item: (item, classes) => {
            const categoryItem = document.createElement("li");
            categoryItem.className = classes.item;
            categoryItem.innerHTML += `<a href="${item.url}" class="${classes.link}">${item.title}</a>`;

            if(item.children) {
                const categoriesList = document.createElement("ul");
                categoriesList.className = classes.children.list;

                item.children.forEach((child) => {
                    categoriesList.innerHTML += `<li class="${classes.children.item}">
                        <a class="${classes.children.link}" href="${child.url}">${child.title}</a>
                    </li>`
                });

                categoryItem.appendChild(categoriesList);
            }
        
            return categoryItem;
        }
    },
};

export default Category;