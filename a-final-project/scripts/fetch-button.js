document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/products.json')
        .then(response => response.json())
        .then(jsonData => {
            const productsContainer = document.getElementById('products-data');

            jsonData.products.forEach(products => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                const img = document.createElement('img');
                img.src = products.imageURL;
                img.alt = products.title;

                const title = document.createElement('h2');
                title.textContent = products.title;

                const description = document.createElement('p');
                description.textContent = products.description;

                const price = document.createElement('p');
                price.textContent = `$${products.price}`;

                const button = document.createElement('button');
                button.className = 'buy-button';
                button.textContent = 'Buy Now';

                productCard.appendChild(img);
                productCard.appendChild(title);
                productCard.appendChild(description);
                productCard.appendChild(price);
                productCard.appendChild(button);
                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});



