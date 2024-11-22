var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cardapio',function(req,res){
  res.render('ParteRestaurante/Cardapio');
});

router.get('/pagamentos',function(req,res){
  res.render('Checkout/Pagamento');
});

router.get('/Reservas',function(req,res){
  res.render('ParteRestaurante/Reservas');
});

router.get('/Admin',function(req,res){
  res.render('AreaAdm/Loginadm');
});

router.get('/Dashboard',function(req,res){
  res.render('Dashboard/dashboard');
});

router.get('/Pedidos',function(req,res){
  res.render('AreaAdm/PedidosControll');
});

router.get('/NovosPratos',function(req,res){
  res.render('AreaAdm/PratosControll');
});

router.get('/precos',function(req,res){
  res.render('/javascripts/precos.js');
});

module.exports = router;
