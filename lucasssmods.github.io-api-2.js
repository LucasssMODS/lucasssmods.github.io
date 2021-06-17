/*!
<!--Deseja Comprar O Template Do Site?? Chame No Número: +55 (17) 98805-9041, Não Se Esqueça Que Nosso Site Tem Copyright, Então Não Queira Tentar Copiar hahahahaha ^_^--!>
*/
$(document).ready(function(){
//Função Para Alternar Submenus
$('.sub-btn').click(function(){
$(this).next('.sub-menu').slideToggle();
$(this).find('.dropdown').toggleClass('rotate');
});
//Função Para Expandir E Recolher A Barra Lateral
$('.menu-btn').click(function(){
$('.side-bar').addClass('active');
$('.menu-btn').css("visibility", "hidden");
});
//Função Para Expandir E Recolher A Barra Lateral
$('.close-btn').click(function(){
$('.side-bar').removeClass('active');
$('.menu-btn').css("visibility", "visible");
});
});
/*!
<!--Deseja Comprar O Template Do Site?? Chame No Número: +55 (17) 98805-9041, Não Se Esqueça Que Nosso Site Tem Copyright, Então Não Queira Tentar Copiar hahahahaha ^_^--!>
*/
