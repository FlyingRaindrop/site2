<$php
	$data = array();

	$data['mes'] = 'Ok';

	header('Content-Type: application/json');
	echo json_encode($data);
	exit;

$>