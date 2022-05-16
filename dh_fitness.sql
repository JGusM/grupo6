-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2022 a las 02:24:57
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dh_fitness`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `categoryld` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `discount`, `image`, `categoryld`) VALUES
(1, 'SOGA BATTLE ROPE', 'Peso: 5Kg; Dimensiones: 20 x 20 x 10 cm; Largo: 12m', 14900, 10, 'soga_battle.jpg', 1),
(2, 'BOZU CON INFLADOR', 'Peso: 5 kg; Dimensiones: 65 x 65 x 15 cm', 13200, 5, 'bozu.jpeg', 1),
(3, 'CUADRILATERO DE COORDINACION', 'Peso: 1Kg; Dimensiones: 10 x 10 x 3 cm', 1940, 10, 'cuadrilatero_coordinacion.jpeg', 1),
(4, 'STEP CLASICA CON GOMA', 'Peso: 4Kg; Dimensiones: 100 x 37 x 10 cm', 7300, 5, 'plataforma-clasica.jpeg', 2),
(5, 'BODY PUMP - EQUIPO COMPLETO', 'Peso: 28Kg; Dimensiones: 100 x 50 x 20 cm', 12240, 20, 'body-pump.jpg', 2),
(6, 'COLCHONETA MAT DE YOGA', 'Peso: 1kg; Dimensiones: 60 x 8 x 8 cm', 2830, 10, 'mat-yoga.jpeg', 3),
(7, 'PELOTA DE PILATES', 'Peso: 1Kg; Dimensiones: 13 x 5 x 16 cm', 1200, 5, 'pelota-pilates.jpg', 3),
(8, 'PELOTA DE ESFERODINAMIA', 'Peso: 3Kg; Dimensiones: 17 x 14 x 21 cm', 4300, 5, 'pelotas-esferodinamia.jpeg', 3),
(9, 'ROLO DE PILATES', 'Peso: 3Kg; Dimensiones: 61 x 14 x 5 cm', 5100, 5, 'rolo-pilates.jpeg', 3),
(10, 'ROLO FOAM', 'Peso: 1Kg; Dimensiones: 15 x 30 x 50 cm', 2060, 5, 'rolo-foam.jpeg', 3),
(11, 'HAND GRIP', 'Peso: 500gr; Dimensiones: 20 x 15 x 4 cm', 840, 5, 'hand-grip.jpeg', 1),
(12, 'RUEDA PARA ABDOMINALES', 'Peso: 1Kg; Dimensiones: 10 x 10 x 10 cm', 2000, 5, 'rueda-abdominal.jpeg', 1),
(13, 'BANDA LARGA', 'Peso: 500gr; Dimensiones: 10 x 10 x 2 cm', 1200, 5, 'banda-elastica.jpeg', 1),
(14, 'MINITRAMP CON FUNDA', 'Peso: 5 kg; Dimensiones: 50 x 50 x 20 cm', 16900, 10, 'mini-tramp-funda.jpeg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productcategory`
--

CREATE TABLE `productcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productcategory`
--

INSERT INTO `productcategory` (`id`, `name`) VALUES
(1, 'Entrenamiento funcional'),
(2, 'Fitness Grupal'),
(3, 'Yoga-Pilates');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userRole` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `userRole`, `image`) VALUES
(1, 'Sabrina', 'Sastre', 'sabrisastre@gmail.com', 'DH1234', 'administrador', 'SS.jpg'),
(2, 'Gustavo', 'Mei', 'gmei@gmail.com', 'programacion1234', 'administrador', 'GM.jpg'),
(3, 'Lenin', 'Samaan', 'le.samaan@hotmail.com', 'desarrollador456', 'usuario', 'LS.jpg'),
(4, 'Charlie', 'Garcia', 'charly_garcia@hotmail.com', 'fullstack10', 'usuario', 'C.jpg'),
(5, 'Mariano', 'Molina', 'marianm@gmail.com', 'javascript20', 'usuario', 'MM.jpg'),
(6, 'Natalia', 'Pareti', 'npareti@gmail.com', 'express123', 'usuario', 'NP.jpg'),
(7, 'sdfsdffdf', 'fsdf', 'agustinchinchillagarcia@gmail.com', '$2a$10$wmpbELhxgNEMgWEj1CTGaOK1Z1QFpDg/GpLHmsJ9.AtQT0J2rW5GG', 'user', 'default-image.png'),
(8, 'prueba2', 'PRUEBA2', 'agustinchinchillagarcia@gmail.com', '$2a$10$MpvluigQkBqC37pTiakyjOpHrnO3ilbT9yMcWLrVeB.X8AwY3/uAe', 'user', 'default-image.png'),
(9, 'agustin', 'agustin', 'agustin@gmail.com', '$2a$10$D/g5EyC.BPGQURb6NrbVN.XS3oRtolSoYRyJXK.g2FMWZUYRjSjo2', 'user', 'default-image.png'),
(10, 'Gustavo', 'Mei', 'jg@mail.com', '$2a$10$cI/aP5noNUQkTuA2G/0gL.doRhAnnSo0A7MD8M9FdWrfKilEhLTl.', 'user', 'default-image.png'),
(11, 'rosa', 'flores', 'rf@mail.com', 'privacypolicy', 'user', 'default-image.png'),
(12, 'pepito', 'flores', 'pf@mail.com', '$2a$10$Eoz0twciKtMjQxuFhPKA1.dLikBTuVMJ9v450n1VzAL1clNrBTSWW', 'user', 'default-image.png'),
(13, 'prueba', 'prueba', 'sabrinasastre@yahoo.com.ar', '$2a$10$lfiJ4eSBjCkyGBunragEz./lL.zXSX70twpasxXXway4cCbG1ydNG', 'user', 'image-1647894177901.png'),
(14, 'Matias', 'Cejas', 'mati@cejas.com', '$2a$10$VB05RP.oxToGqocjLwHgeeFbVf6AFLifcTbmbpf0BUjs5R1lWnfC2', 'user', 'image-1651772771527.jpeg'),
(15, 'Gustavo', 'Mai', 'jgm@gmail.com', '$2a$10$eExbUmXZa6OpYPaM25WqUunlTFksDcNi3773QQVvb8Y1os8skBZI.', 'user', 'image-1652055149595.jpg'),
(16, 'Jorge', 'Meis', 'jorge@gmail.com', '$2a$10$VMUme6VUqn7Kg4wOyRObAubtejS3u5xUjRBGvjcJY6yEKuqzkeJXm', 'user', 'image-1652229872210.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryld` (`categoryld`);

--
-- Indices de la tabla `productcategory`
--
ALTER TABLE `productcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `productcategory`
--
ALTER TABLE `productcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryld`) REFERENCES `productcategory` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
