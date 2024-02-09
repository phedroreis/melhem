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
  var articleTail = document.querySelector('#article-tail');

  main.style.top = document.querySelector('header').offsetHeight + 'px';
  articleTail.style.height = document.querySelector('footer').offsetHeight + 'px';
  
  var youtube = document.querySelectorAll('iframe');

  var hamburger = document.querySelector('#hamburger');
  var menu = document.querySelector('#main-menu');

  var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (viewportWidth > 480) {//video ocupa 60% da largura e eh centralizado no elemento main

    hamburger.style.display = 'none';
    menu.style.display = 'block';

    var height = viewportWidth * 9 / 25;
    var marginLeft = (viewportWidth - (viewportWidth * 6 / 10)) / 2;
   
    for (let i = 0; i < youtube.length; i++) {
      youtube[i].style.width = '60%';
      youtube[i].style.height = height  + 'px';
      youtube[i].style.marginLeft = marginLeft + 'px'; 
    }
  }
  else {//viewport menor ou igual a 480: o video vai ocupar 100% da largura

    hamburger.style.display = 'block';
    menu.style.display = 'none';

    var height = viewportWidth * 3 / 5;

    for (let i = 0; i < youtube.length; i++) {
      youtube[i].style.width = '100%';
      youtube[i].style.height = height  + 'px';
      youtube[i].style.marginLeft = '0'; 
    } 

  }

}//resizing

/*-----------------------------------------------------------------------------
      Esconde o menu principal ao se clicar em main ou footer quando 
      o menu estiver no modo suspenso
-----------------------------------------------------------------------------*/
function hideMenu() {

  var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (viewportWidth > 480) return; //Menu suspenso estah desabilitado

  var menu = document.querySelector('ul#main-menu');
  if (menu.style.display = 'block') menu.style.display = 'none'; 

}//hideMenu

/*-----------------------------------------------------------------------------
     Mostra o menu principal no modo suspenso ao se clicar no icone do 
     hamburguinho
-----------------------------------------------------------------------------*/
function showMenu() {

  document.querySelector('ul#main-menu').style.display = 'block';

}//showMenu

/*-----------------------------------------------------------------------------
    Registra listeners e executa codigo de inicializacao que deva ser executado
    apos o carregamento de uma pagina. Deve ser chamado em cada pagina do site.

    optionNumber indica o numero do item de menu da pag. que foi carregada
-----------------------------------------------------------------------------*/
function initialize(optionNumber) {

  var menuOptions = document.querySelectorAll('#main-menu li');

  menuOptions[optionNumber].style.color = '#E0B058';//Destaca o item de menu da pag. corrente

  resizing();
  window.addEventListener('resize', resizing);

}//initialize