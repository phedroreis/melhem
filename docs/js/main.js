/*----------------------------------------------------------------------------
            Funcao responsavel por carregar paginas do site
----------------------------------------------------------------------------*/
function loadPage(page) {

  var path = window.location.pathname;
  var currentPage = path.split("/").pop();

  if (page == currentPage) return;

  window.open(page, '_self');//Carrega a pag.

}//loadPage

/*---------------------------------------------------------------------------
Ajusta o posicionamento do elemento main quando houver redimensionamento da
janela. Videos do youtube no elemento main tambem serao redimensionados.
----------------------------------------------------------------------------*/
function resizing() {

  var main = document.querySelector('main');

  main.style.top = document.querySelector('header').offsetHeight + 'px';
  main.style.paddingBottom = document.querySelector('footer').offsetHeight + 'px';

  var videos = document.querySelectorAll('iframe');

  var width = main.clientWidth;

  if (width > 720) {//video ocupa 60% da largura e eh centralizado no elemento main

    var height = width * 9 / 25;
    var marginLeft = (width - (width * 6 / 10)) / 2;
  
    for (let i = 0; i < videos.length; i++) {
      videos[i].style.width = '60%';
      videos[i].style.height = height  + 'px';
      videos[i].style.marginLeft = marginLeft + 'px'; 
    }
  }
  else {//viewport menor que 720: o video vai ocupar 100% da largura

    var height = width * 3 / 5;
   
    for (let i = 0; i < videos.length; i++) {
      videos[i].style.width = '100%';
      videos[i].style.height = height  + 'px';
      videos[i].style.marginLeft = '0'; 
    }   

  }

}//resizing

/*-----------------------------------------------------------------------------
    Registra listeners e executa codigo de inicializacao que deva ser executado
    apos o carregamento de uma pagina. Deve ser chamado em cada pagina do site.

    optionNumber indica o numero do item de menu da pag. que foi carregada
-----------------------------------------------------------------------------*/
function initialize(optionNumber) {

  var menuOptions = document.querySelectorAll('#menu-principal li');

  menuOptions[optionNumber].style.color = '#E0B058';//Destaca o item de menu da pag. corrente

  resizing();
  window.addEventListener('resize', resizing);

}//initialize