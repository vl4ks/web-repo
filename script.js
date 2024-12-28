if (document.readyState === 'loading') {
    console.log('Document is ready!'); //написала просто для проверки(для себя)
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran',
                        hasChildren: true,
                        items: [
                            { name: 'Smth', hasChildren: false, items: [] },
                            { name: 'Smth', hasChildren: false, items: [] }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                    },
                    {
                        name: 'Handmade',
                        hasChildren: true,
                        items: [
                            { name: 'Smth', hasChildren: false, items: [] },
                            { name: 'Smth', hasChildren: false, items: [] }
                        ]
                    },
                    {
                        name: 'Vigro Glass',
                        hasChildren: false,
                        items: []
                    }
                ]
            },
            {
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran',
                        hasChildren: true,
                        items: [
                            { name: 'Smth', hasChildren: false, items: [] },
                            { name: 'Smth', hasChildren: false, items: [] }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                    }
                ]
            }
        ]
    };

    const items = new ListItems(document.getElementById('list-items'), data);
    items.render();
    items.init();

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            this.el.addEventListener('click', (event) => {
                const arrow = event.target.closest('[data-open]');
                if (arrow) {
                    const parent = arrow.closest('[data-parent]');
                    this.toggleItems(parent);
                }
            });
        };

        this.render = function () {
            this.el.innerHTML = this.renderParent(this.data);
        };

        this.renderParent = function (data) {
            let html = `
                <div class="list-item" data-parent>
                    <div class="list-item__inner">
                        <div class="list-item__arrow-container">
                            ${data.hasChildren ? '<img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>' : ''}
                        </div>
                        <img class="list-item__folder" src="img/folder.png" alt="folder">
                        <span class="list-item__text">${data.name}</span>
                    </div>`;

            if (data.hasChildren) {
                html += '<div class="list-item__items">';
                data.items.forEach(item => {
                    html += this.renderParent(item); // Рекурсия
                });
                html += '</div>';
            }

            html += '</div>';
            return html;
        };

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open');
        };
    }
}