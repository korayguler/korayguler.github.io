const portfolio = () => {
  const portfolioArea = document.querySelector('[data-portfolio]');
  fetch('../data/portfolio.json')
    .then((res) => res.json())
    .then((data) => create(data))
    .catch((err) => console.log(err));

  const create = (data) => {
    console.log(data);
    let template = '';
    data.forEach((e) => {
      console.log(data.image);
      template += `
        <!--card_start-->
        <div class="card">
          <img src="${data.img}" />
          <span class="name">${data.name}</span>
          <div class="tags">
            <span>html</span> <span>css</span> <span>JavaScriopt</span>
            <span>Bootstrap</span>
          </div>
          <div class="url">
            <a class="btn btn-hover" href="${data.source}">Source</a>
            <a class="btn btn-hover" href="${data.live}">Preview</a>
          </div>
        </div>
        <!--card_end-->
    
        `;
    });
    portfolioArea.innerHTML = template;
  };
};
portfolio();
