<?php

header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news  = array(
	array('title' => '等等大你还能给你弄点' , 'date' => '2016、5、6'),
	array('title' => '等大苏打点' , 'date' => '2016、5、6'),
	array('title' => '等股份大股东打点' , 'date' => '2016、5、6'),
	array('title' => '广泛大锅饭的苏打点' , 'date' => '2016、5、6'),
	array('title' => '等大苏打点' , 'date' => '2016、5、6'),
	array('title' => '等大放松放松的方式' , 'date' => '2016、5、6'),
	array('title' => '等大发送撒旦苏打点' , 'date' => '2016、5、6'),
	array('title' => '等大苏打点哒哒哒人七日' , 'date' => '2016、5、6'),
);

echo json_encode($news);