-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 12, 2021 at 09:25 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reservapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `eleves`
--

DROP TABLE IF EXISTS `eleves`;
CREATE TABLE IF NOT EXISTS `eleves` (
  `code_eleve` int(11) NOT NULL AUTO_INCREMENT,
  `prenom_eleve` varchar(255) NOT NULL,
  `nom_eleve` varchar(255) NOT NULL,
  `classe` varchar(255) NOT NULL,
  `num_tel` varchar(255) NOT NULL,
  PRIMARY KEY (`code_eleve`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
CREATE TABLE IF NOT EXISTS `groupe` (
  `id_groupe` int(11) NOT NULL AUTO_INCREMENT,
  `nom_groupe` varchar(255) NOT NULL,
  `archive_state` smallint(1) DEFAULT '0',
  PRIMARY KEY (`id_groupe`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groupe`
--

INSERT INTO `groupe` (`id_groupe`, `nom_groupe`, `archive_state`) VALUES
(2, '5 Sim1', 1),
(3, '4 NIDS 1', 1),
(4, '6 BI 6', 0),
(6, '5 EPI IA', 0),
(7, ' TWIN 5', 0);

-- --------------------------------------------------------

--
-- Table structure for table `groupe_eleve`
--

DROP TABLE IF EXISTS `groupe_eleve`;
CREATE TABLE IF NOT EXISTS `groupe_eleve` (
  `id_groupe` int(11) NOT NULL,
  `id_eleve` int(11) NOT NULL,
  `payer` smallint(1) NOT NULL DEFAULT '0',
  `presence` smallint(1) NOT NULL DEFAULT '1',
  `date` date NOT NULL,
  `heure` time NOT NULL,
  `nom_prof` varchar(255) NOT NULL,
  PRIMARY KEY (`id_eleve`,`id_groupe`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `locataires`
--

DROP TABLE IF EXISTS `locataires`;
CREATE TABLE IF NOT EXISTS `locataires` (
  `id_locataire` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `rue` varchar(255) NOT NULL,
  `codepostal` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `portable` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `archiver_state` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_locataire`),
  UNIQUE KEY `cin` (`cin`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locataires`
--

INSERT INTO `locataires` (`id_locataire`, `nom`, `prenom`, `cin`, `rue`, `codepostal`, `ville`, `tel`, `portable`, `email`, `archiver_state`) VALUES
(7, 'Andrey', 'Smirnov', '45784225', 'Avenue Mexico', '7586', 'Cardiff', '', '85785257', 'andrey_smirnov@email.uk', 0),
(8, 'Yuri', 'Blankov', '00218241', 'Moscow Avenue', '0021', 'St Petersburg', '02371741', '11114471', 'Yuri77@gmail.com', 0),
(9, 'Zied', 'Jday', '46882521', 'Sallakta Ben Njima', '5180', 'Ksour Essef', '14243331', '00001140', 'zied81@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
CREATE TABLE IF NOT EXISTS `locations` (
  `ID_loc` int(11) NOT NULL AUTO_INCREMENT,
  `cin_loc` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_loc`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`ID_loc`, `cin_loc`) VALUES
(1, 'A22'),
(2, 'C214'),
(4, 'C215'),
(5, 'C21');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id_reserv` int(11) NOT NULL AUTO_INCREMENT,
  `id_loc` int(11) NOT NULL,
  `id_locataire` int(11) NOT NULL,
  `id_groupe` varchar(255) NOT NULL,
  `datedeb` varchar(255) NOT NULL,
  `datefin` varchar(255) NOT NULL,
  `heuredeb` char(2) NOT NULL,
  `jourdeb` char(2) NOT NULL,
  `moisdeb` char(2) NOT NULL,
  `andeb` smallint(4) NOT NULL,
  `heurefin` char(2) NOT NULL,
  `jourfin` char(2) NOT NULL,
  `moisfin` char(2) NOT NULL,
  `anfin` smallint(4) NOT NULL,
  `archive_state` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_reserv`),
  KEY `reservation_ibfk_1` (`id_loc`),
  KEY `id_locataire` (`id_locataire`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id_reserv`, `id_loc`, `id_locataire`, `id_groupe`, `datedeb`, `datefin`, `heuredeb`, `jourdeb`, `moisdeb`, `andeb`, `heurefin`, `jourfin`, `moisfin`, `anfin`, `archive_state`) VALUES
(18, 1, 8, '6 BI 6', '2023-11-03', '2024-02-02', '01', '03', '11', 2023, '01', '02', '02', 2024, 0),
(28, 1, 8, '6 BI 6', '2021-02-01', '2022-02-03', '00', '01', '02', 2021, '02', '03', '02', 2022, 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_loc`) REFERENCES `locations` (`ID_loc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_locataire`) REFERENCES `locataires` (`id_locataire`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
