<?php
include 'phpScripts.php';
include 'mesEHoras.php';
$dia = $_REQUEST['dia'];
$hora = $_REQUEST['hora'];
$ms = $_REQUEST['mes'];
$nome = $_REQUEST['nome'];
$cpf = $_REQUEST['cpf'];
$telefone = $_REQUEST['telefone'];

$comando = "INSERT INTO agendamentos (nome, cpf, email, telefone, hora, dia, mes, ano) VALUES ($nome, $cpf, '0', $telefone, $hora, $dia, $ms, '2024')";
echo "Foi solicitado agendamento para dia ".$data." de ".$mes[$ms]." às ".$hora." horas <br>";
echo $comando;
header("location: ../sucesso.html#sucesso");

//Mostrar agendamentos:
//conexao("localhost", "root", "", "agenda", "SELECT * FROM agendamentos WHERE cpf=$cpf");

?>