<?php

$i = $_GET["i"];

switch ($i) {
    case "MeeevoShop": 
        echo "MeeevoShop - интернет-магазин, с различными товарами(купить их нельзя). На сайте используется html, css, react и php. Связь с бд проходит через API";
        break;
    default: 
        die("ERROR");
        break;
}

?>