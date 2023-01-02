'use strict';

const newContainerEl = document.getElementById('news-container');
const btnPre = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const pageNumber = document.getElementById('page-num');
const btnSearch = document.getElementById('btn-submit');
const inputQuery = document.getElementById('input-query');
const navPageNum = document.getElementById('nav-page-num');

//--------Check current user, add get current user value
checkCurrentUser();

let totalNews;
let pageCurrent = 1;

navPageNum.style.display = 'none';
btnSearch.addEventListener('click', search);

//---------- Functions Children----------
function search() {
    if (inputQuery.value.trim() === '') {
        alert('Please enter keywords!!!');
        inputQuery.value = '';
    } else {
        navPageNum.style.display = 'none';
        newContainerEl.innerHTML = '';
        renderNews(inputQuery.value, 1);
    }
}

async function renderNews(keywords, page) {
    const news = await currentUser.getApiSearch(keywords, page);

    if (!news) {
        inputQuery.value = '';
    } else {
        navPageNum.style.display = 'block';

        totalNews = news.total;

        //   Hide button Pre
        if (page === 1) btnPre.style.display = 'none';
        else btnPre.style.display = 'block';
        //   Hide button Next
        if (page * currentUser.numNewsPerPage >= totalNews) {
            btnNext.style.display = 'none';
        } else btnNext.style.display = 'block';

        newContainerEl.innerHTML = '';
        pageNumber.innerText = page;

        news.data.forEach(news => {
            const html = `
                <div class="card flex-row flex-wrap">
                    <div class="card mb-3" style="">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img
                            src="${news.urlToImage || ''}"
                            class="card-img"
                            alt="${news.title}"
                        />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.description || ''}</p>
                            <a
                            href="${news.url}"
                            class="btn btn-primary"
                            >View</a
                            >
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            `;
            newContainerEl.insertAdjacentHTML('beforeend', html);
        });
    }
}

//--------Handle when btn Next, Preview click
btnNext.addEventListener('click', () => {
    pageCurrent++;
    renderNews('us', pageCurrent);
});

btnPre.addEventListener('click', () => {
    pageCurrent--;
    renderNews('us', pageCurrent);
});
