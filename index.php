<?php
  if (!empty($_POST['button'])) {
	  //aplay 1000.wav
	  echo "HELLO WORLD"
  } else {
  }
?>
<form action="index.php" method="post">
  <input type="hidden" name="act" value="run">
  <input type="submit" value="php button">
</form>
<?php
			  }
?>
