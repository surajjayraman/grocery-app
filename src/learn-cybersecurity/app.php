<?php
	class Change_color
	{
		private $color;

		function __wakeup(){
			echo '<body style="background-color:' . $this->color . '">';
		}
	}


	$deserial_content = $_GET['color'];
	unserialize($deserial_content);

	echo "Welcome to Our Registration Page!";
	echo "<br>";
	echo "Come back after our security assessment for more information!";

	//Remove this class before the security assessment!
	class Debug_class_remove_from_prod
	{
		private $hook;   
		 
		function __wakeup(){
			system($this->hook);
		}
	}
?>