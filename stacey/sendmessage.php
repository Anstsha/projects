<?php
	$content = '';
	foreach ($_POST as $key => $value){
		if ($value){
			$content .= "<b?>$key</b>: <i> $value</i>\n";
		}
	}
	if(trim($content)){
		$content = " <b>Message from Site:</b>\n".$content;
		$apiToken = "6654970199:AAG8umps5vZO_qNt7XOa6RxTZcM74b68Vb0";
		$data = [
			'chat_id' => '@GetStaceyMessage',
			'text' => $content,
			'parse_mode' => 'HTML'
		];

		$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
	}
?>