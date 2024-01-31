<?php
    function conexao($servidor, $usuario, $senha, $db, $sql){
        include 'mesEHoras.php';
        $dados = array();
        $con = new mysqli($servidor, $usuario, $senha, $db);
    
        //verificar conexão
        if($con -> connect_errno){
            echo "A conexão falhou: ".$con -> connect_error;
            exit();
        }else{
            echo "Conectado a ".strtoupper($db)." com sucesso!<br>";
        }

        $res = $con->query($sql);
        if($res->num_rows > 0){
            echo $res->num_rows." Linha de dados encontradas!<br><hr>";
            while($linha = $res->fetch_assoc()) {
                $dados[0] = $linha['nome'];
                $dados[1] = $linha['telefone'];
                $dados[2] = $linha['dia'];
                $dados[3] = $mes[$linha['mes']];
                $dados[4] = $linha['ano'];
                $dados[5] = $horario[$linha['hora']];
                var_dump($dados);
                echo "<hr>";
            }
           
        }else{
            echo "Nenhum dado foi encontrado...<br>";
        }
    }
    
    //conectar("localhost", "root", "", "agenda", "SELECT * FROM dias_disponiveis");

?>