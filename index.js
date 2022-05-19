
fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {

            var mainContainer = document.getElementById("container");

              for (var i = 0; i < data.length; i++) {
                // book-card tags
                var div = document.createElement("div");//
                div.classList.add('book-card');


                var h4 = document.createElement("h4");
                var h2 = document.createElement("h2");
                var price = document.createElement("span");
                var addToBag = document.createElement("button");
                var showMore = document.createElement("a");

                                

                addToBag.setAttribute('href', './index.html');
                showMore.setAttribute('data-modal', `modal-${i}`);
                // showMore.setAttribute('onclick', 'showMoreFunc()');



                h4.innerHTML=data[i].author;
                h2.innerHTML=data[i].title;
                price.innerHTML='Price'+data[i].price+'$';
                addToBag.innerHTML='Add to Bag';
                showMore.innerHTML='Show more';
                showMore.classList.add('show-more');
                


                div.appendChild(h4);
                div.appendChild(h2);
                div.appendChild(price);
                div.appendChild(showMore);
                div.appendChild(addToBag);


                mainContainer.appendChild(div);


                // modal tags
                var modalHeading = document.createElement("h2");
                var modalDesc = document.createElement("p");


                modalHeading.innerHTML=data[i].title;
                modalDesc.innerHTML=data[i].description;

                var modal = document.createElement("div");
                modal.classList.add('modal');
                modal.setAttribute('id', `modal-${i}`);


                var modal_bg_exit = document.createElement('div');
                modal_bg_exit.classList.add('modal-bg', 'modal-exit');

                var modalContainer = document.createElement('div');
                modalContainer.classList.add('modal-container');

                var closeBtn=document.createElement('button');
                closeBtn.classList.add('modal-close', 'modal-exit');
                closeBtn.innerHTML='x';
                


                modal.appendChild(modal_bg_exit);
                modal.appendChild(modalContainer);
                modalContainer.appendChild(modalHeading);
                modalContainer.appendChild(modalDesc);
                modalContainer.appendChild(closeBtn);

                mainContainer.appendChild(modal);

                const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});

              }
        })
        .catch(function (err) {
            console.log(err);
        });


