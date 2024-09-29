-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 28, 2024 at 11:27 PM
-- Server version: 11.5.2-MariaDB
-- PHP Version: 8.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `contribuinte` int(11) NOT NULL,
  `cep` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `logradouro`, `numero`, `bairro`, `complemento`, `contribuinte`, `cep`) VALUES
(3, 'Rua 1', '12', 'Bairro', 'teste', 4, '1234567'),
(4, 'Rua 1', '12', 'Bairro', 'teste', 4, '1234567'),
(5, 'Rua Independência', '100', 'Centro', 'Apartamento 101', 4, '01001-000'),
(6, 'Avenida Paulista', '1500', 'Bela Vista', 'Sala 202', 5, '01002-000'),
(7, 'Rua das Flores', '200', 'Jardins', NULL, 6, '01003-000'),
(8, 'Avenida Brasil', '500', 'Copacabana', 'Cobertura', 7, '01004-000'),
(9, 'Rua da Liberdade', '123', 'Liberdade', 'Bloco B, 203', 8, '01005-000'),
(10, 'Rua Sete de Setembro', '456', 'Centro', 'Loja 01', 9, '01006-000'),
(11, 'Avenida Rio Branco', '789', 'Centro', NULL, 10, '01007-000'),
(12, 'Rua Augusta', '150', 'Consolação', 'Apartamento 503', 11, '01008-000'),
(13, 'Avenida Ipiranga', '900', 'República', NULL, 12, '01009-000'),
(14, 'Rua Vergueiro', '250', 'Liberdade', 'Bloco A, 301', 13, '01010-000'),
(15, 'Rua Santa Cecília', '850', 'Santa Cecília', NULL, 14, '01011-000'),
(16, 'Avenida Angélica', '1020', 'Higienópolis', 'Cobertura', 15, '01012-000'),
(17, 'Rua Frei Caneca', '200', 'Consolação', NULL, 16, '01013-000'),
(18, 'Rua Teodoro Sampaio', '350', 'Pinheiros', 'Apartamento 203', 17, '01014-000'),
(19, 'Rua Clélia', '400', 'Lapa', 'Casa 02', 18, '01015-000'),
(20, 'Avenida Morumbi', '1200', 'Morumbi', NULL, 19, '01016-000'),
(21, 'Rua dos Trilhos', '550', 'Mooca', 'Galpão 1', 20, '01017-000'),
(22, 'Rua da Glória', '700', 'Liberdade', NULL, 21, '01018-000'),
(23, 'Avenida das Nações', '1100', 'Brooklin', 'Sala 403', 22, '01019-000'),
(24, 'Rua do Catete', '600', 'Catete', 'Apartamento 202', 23, '01020-000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `mobile` bigint(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cpf` varchar(11) NOT NULL,
  `data_nascimento` varchar(10) NOT NULL,
  `sexo` enum('M','F') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `created_at`, `updated_at`, `cpf`, `data_nascimento`, `sexo`) VALUES
(4, 'Irwing', 'Teste@gmail.com', 12312312, '2024-09-27 04:00:00', NULL, '12345678910', '2024-09-02', 'M'),
(5, 'João Silva', 'joao.silva@gmail.com', 11999999999, '2024-09-28 23:23:27', NULL, '12345678901', '1990-05-12', 'M'),
(6, 'Maria Oliveira', 'maria.oliveira@gmail.com', 21988888888, '2024-09-28 23:23:27', NULL, '23456789012', '1985-07-22', 'F'),
(7, 'Carlos Souza', 'carlos.souza@hotmail.com', 31977777777, '2024-09-28 23:23:27', NULL, '34567890123', '1992-09-15', 'M'),
(8, 'Ana Lima', 'ana.lima@gmail.com', 41966666666, '2024-09-28 23:23:27', NULL, '45678901234', '1988-03-11', 'F'),
(9, 'Pedro Ferreira', 'pedro.ferreira@yahoo.com', 51955555555, '2024-09-28 23:23:27', NULL, '56789012345', '1995-12-01', 'M'),
(10, 'Fernanda Costa', 'fernanda.costa@gmail.com', 61944444444, '2024-09-28 23:23:27', NULL, '67890123456', '1993-08-20', 'F'),
(11, 'Ricardo Gomes', 'ricardo.gomes@gmail.com', 71933333333, '2024-09-28 23:23:27', NULL, '78901234567', '1989-02-27', 'M'),
(12, 'Patrícia Santos', 'patricia.santos@hotmail.com', 81922222222, '2024-09-28 23:23:27', NULL, '89012345678', '1991-11-05', 'F'),
(13, 'Bruno Almeida', 'bruno.almeida@gmail.com', 91911111111, '2024-09-28 23:23:27', NULL, '90123456789', '1994-06-17', 'M'),
(14, 'Juliana Rodrigues', 'juliana.rodrigues@gmail.com', 21999999998, '2024-09-28 23:23:27', NULL, '01234567891', '1996-04-08', 'F'),
(15, 'Lucas Moreira', 'lucas.moreira@hotmail.com', 31988888887, '2024-09-28 23:23:27', NULL, '02345678912', '1990-10-25', 'M'),
(16, 'Camila Farias', 'camila.farias@gmail.com', 41977777776, '2024-09-28 23:23:27', NULL, '03456789023', '1992-03-19', 'F'),
(17, 'Eduardo Mendes', 'eduardo.mendes@gmail.com', 51966666665, '2024-09-28 23:23:27', NULL, '04567890134', '1993-01-30', 'M'),
(18, 'Mariana Barros', 'mariana.barros@yahoo.com', 61955555554, '2024-09-28 23:23:27', NULL, '05678901245', '1991-12-13', 'F'),
(19, 'Gustavo Pereira', 'gustavo.pereira@gmail.com', 71944444443, '2024-09-28 23:23:27', NULL, '06789012356', '1987-07-04', 'M'),
(20, 'Isabela Araujo', 'isabela.araujo@gmail.com', 81933333332, '2024-09-28 23:23:27', NULL, '07890123467', '1989-09-18', 'F'),
(21, 'Felipe Ribeiro', 'felipe.ribeiro@gmail.com', 91922222221, '2024-09-28 23:23:27', NULL, '08901234578', '1995-05-06', 'M'),
(22, 'Rafaela Lima', 'rafaela.lima@hotmail.com', 11911111110, '2024-09-28 23:23:27', NULL, '09012345689', '1994-11-25', 'F'),
(23, 'André Vieira', 'andre.vieira@gmail.com', 21999999997, '2024-09-28 23:23:27', NULL, '10123456780', '1991-08-29', 'M'),
(24, 'Larissa Martins', 'larissa.martins@gmail.com', 31988888886, '2024-09-28 23:23:27', NULL, '11234567890', '1992-06-15', 'F');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contribuinte` (`contribuinte`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `properties_ibfk_1` FOREIGN KEY (`contribuinte`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
