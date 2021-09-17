-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 17, 2021 at 09:22 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eleves`
--

INSERT INTO `eleves` (`code_eleve`, `prenom_eleve`, `nom_eleve`, `classe`, `num_tel`) VALUES
(1, 'Zied', 'Jday', '5 BI 2', '33335555');

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
(3, '5 EPI', 1),
(4, '6 BI 5', 0),
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
  PRIMARY KEY (`id_groupe`,`id_eleve`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groupe_eleve`
--

INSERT INTO `groupe_eleve` (`id_groupe`, `id_eleve`) VALUES
(6, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`ID_loc`, `cin_loc`) VALUES
(1, 'A22'),
(2, 'C214'),
(4, 'C215'),
(5, 'C21'),
(6, '5 EPI 2');

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
  `datedeb` date NOT NULL,
  `datefin` date NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id_reserv`, `id_loc`, `id_locataire`, `id_groupe`, `datedeb`, `datefin`, `heuredeb`, `jourdeb`, `moisdeb`, `andeb`, `heurefin`, `jourfin`, `moisfin`, `anfin`, `archive_state`) VALUES
(18, 1, 8, '6 BI 6', '2023-11-03', '2024-02-02', '01', '03', '11', 2023, '01', '02', '02', 2024, 0),
(28, 1, 8, '6 BI 6', '2021-02-01', '2022-02-03', '00', '01', '02', 2021, '02', '03', '02', 2022, 0);

-- --------------------------------------------------------

--
-- Table structure for table `seance`
--

DROP TABLE IF EXISTS `seance`;
CREATE TABLE IF NOT EXISTS `seance` (
  `id_seance` bigint(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `heure` varchar(255) NOT NULL,
  `id_locataire` int(11) NOT NULL,
  `id_groupe` int(11) NOT NULL,
  PRIMARY KEY (`id_seance`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seance`
--

INSERT INTO `seance` (`id_seance`, `date`, `heure`, `id_locataire`, `id_groupe`) VALUES
(7, '2021-09-20', '13:19', 9, 6);

-- --------------------------------------------------------

--
-- Table structure for table `seance_eleves`
--

DROP TABLE IF EXISTS `seance_eleves`;
CREATE TABLE IF NOT EXISTS `seance_eleves` (
  `id_seance` int(11) NOT NULL,
  `id_eleve` int(11) NOT NULL,
  `absents` varchar(255) DEFAULT '0',
  `payement` double DEFAULT '0',
  PRIMARY KEY (`id_seance`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seance_eleves`
--

INSERT INTO `seance_eleves` (`id_seance`, `id_eleve`, `absents`, `payement`) VALUES
(7, 1, '0', 0);

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
