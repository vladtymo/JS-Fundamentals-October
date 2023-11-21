const api = 'https://dummyjson.com/products';

const pagination = {
    skip: 0,
    limit: 40,
    total: null,

    next() {
        if (this.skip < this.total)
            this.skip += this.limit;
    }
};

loadBtn.onclick = async () => {

    const url = api + `?skip=${pagination.skip}&limit=${pagination.limit}`;

    const response = await fetch(url);
    const data = await response.json();

    pagination.total = data.total;
    pagination.next();

    console.log(data);

    for (const i of data.products) {
        productList.innerHTML += ` <div class="col">
                                        <div class="card h-100">
                                            <img src="${i.thumbnail}" class="card-img-top" alt="product image">
                                            <div class="card-body">
                                                <h5 class="card-title">${i.title}</h5>
                                                <p class="card-text">${i.category} ${i.price}$</p>
                                            </div>
                                        </div>
                                    </div>`;
    }
};