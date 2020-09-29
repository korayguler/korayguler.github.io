const portfolio = () => {
  const portfolioArea = document.querySelector('[data-portfolio]');
  fetch('../data/portfolio.json')
    .then((res) => res.json())
    .then((data) => create(data))
    .catch((err) => console.log(err));

  const create = (data) => {
    const folder =
      'https://raw.githubusercontent.com/korayguler/korayguler.github.io/master/images/portfolio/';

    let template = '';
    data.forEach((e) => {
      template += `
        <!--card_start-->
        <div class="card">
          <img src="${folder + e.image}" />
          <span class="name">${e.name}</span>
          <div class="tags">
           
        ${e.tech.map((el) => `<span>${el}</span>`).join('')}
        
          </div>
          <div class="url">
            <a class="btn btn-hover" href="${
              e.source
            }" target="_blank">Source</a>
            <a class="btn ${e.live === '' ? 'disable' : 'btn-hover'}" href="${
        e.live
      }" ${e.live === '' ? '' : 'target="_blank"'}>Preview</a>
          </div>
        </div>
        <!--card_end-->
    
        `;
    });
    portfolioArea.innerHTML = template;
  };
};
portfolio();
