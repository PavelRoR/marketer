<?php
$videos = array('','');
$hides = array('','');

$sales1 = array('6 000р.','3 000р.');
$sales2 = array('6 000р.','3 000р.');

$todays1 = array('29 900р.','32 900р.');
$todays2 = array('49 900р.','52 900р.');

$links1 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4963&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4964&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4965&clean=true&lg=ru');
$links2 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4969&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4970&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4971&clean=true&lg=ru');

$prepLinks = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4976&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4977&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4978&clean=true&lg=ru');

$dates = array(strtotime('2020-05-26'),strtotime('2020-05-27'),strtotime('2020-05-28'),strtotime('2020-05-31'));
$now = strtotime('now');

if ($now < $dates[0]) {
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];


    $today1 = $todays1[0];
    $today2 = $todays2[0];
  

    $link1 = $links1[0];
    $link2 = $links2[0];


    $prepLink = $prepLinks[0];
}
elseif (($now >= $dates[0])&&($now < $dates[1])) {
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];


    $today1 = $todays1[1];
    $today2 = $todays2[1];


    $link1 = $links1[1];
    $link2 = $links2[1];


    $prepLink = $prepLinks[1];
}
else {
    $link1 = $links1[2];
    $link2 = $links2[2];
  
    $prepLink = $prepLinks[2];
}


?>