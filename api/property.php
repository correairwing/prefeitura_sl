<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM properties";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $properties = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $properties = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($properties);
        break;

    case "POST":
        $property = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO properties(id, cep, logradouro, numero, bairro, complemento, contribuinte) VALUES(null, :cep, :logradouro, :numero, :bairro, :complemento, :contribuinte)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':cep', $property->cep);
        $stmt->bindParam(':logradouro', $property->logradouro);
        $stmt->bindParam(':numero', $property->numero);
        $stmt->bindParam(':bairro', $property->bairro);
        $stmt->bindParam(':complemento', $property->complemento);
        $stmt->bindParam(':contribuinte', $property->contribuinte);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $property = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE properties SET cep= :cep, logradouro =:logradouro, numero =:numero, bairro =:bairro, complemento =:complemento, contribuinte =:contribuinte WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $property->id);
        $stmt->bindParam(':cep', $property->cep);
        $stmt->bindParam(':logradouro', $property->logradouro);
        $stmt->bindParam(':numero', $property->numero);
        $stmt->bindParam(':bairro', $property->bairro);
        $stmt->bindParam(':complemento', $property->complemento);
        $stmt->bindParam(':contribuinte', $property->contribuinte);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;  

    case "DELETE":
        $sql = "DELETE FROM properties WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
