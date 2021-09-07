-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 07, 2021 at 07:40 PM
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
  `id_groupe` int(11) NOT NULL,
  PRIMARY KEY (`code_eleve`),
  KEY `id_groupe` (`id_groupe`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `groupe`
--

DROP TABLE IF EXISTS `groupe`;
CREATE TABLE IF NOT EXISTS `groupe` (
  `id_groupe` int(11) NOT NULL AUTO_INCREMENT,
  `nom_groupe` varchar(255) NOT NULL,
  `id_ligne` varchar(255) NOT NULL,
  `id_prof` varchar(255) NOT NULL,
  `archive_state` smallint(1) DEFAULT '0',
  PRIMARY KEY (`id_groupe`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `id_prof` varchar(255) NOT NULL,
  PRIMARY KEY (`id_eleve`,`id_groupe`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `locataires`
--

DROP TABLE IF EXISTS `locataires`;
CREATE TABLE IF NOT EXISTS `locataires` (
  `id_locataire` int(11) NOT NULL AUTO_INCREMENT,
  `id_reserv` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `rue` varchar(255) NOT NULL,
  `codepostal` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `portable` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `commentaires` text NOT NULL,
  `archiver_state` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_locataire`),
  KEY `id_reserv` (`id_reserv`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locataires`
--

INSERT INTO `locataires` (`id_locataire`, `id_reserv`, `nom`, `prenom`, `cin`, `rue`, `codepostal`, `ville`, `pays`, `tel`, `portable`, `email`, `commentaires`, `archiver_state`) VALUES
(1, 1, 'Zied', 'Jday', '12345678', 'Avenue London', '1238', 'Manchester', 'England', '12345678', '98278471', 'sirfirgison@man.uni', 'no thing to say', 0),
(2, 1, 'Zied', 'Jday', '12345678', 'Avenue London', '1238', 'Manchester', 'England', '12345678', '98278471', 'sirfirgison@man.uni', 'no thing to say', 0),
(3, 1, 'Zied', 'Jday', '12345678', 'Avenue London', '1238', 'Manchester', 'England', '12345678', '98278471', 'sirfirgison@man.uni', 'no thing to say', 0),
(4, 1, 'Ahmed Chebbi', 'Mohamed', '12345677', 'Avenue London', '1238', 'Manchester', 'England', '12345678', '98278471', 'sirfirgison@man.uni', 'no thing to say', 1),
(5, 1, 'Zied', 'Jday', '12345678', 'Avenue London', '1238', 'Manchester', 'England', '12345678', '98278471', 'sirfirgison@man.uni', 'no thing to say', 0),
(6, 1, 'Ahmed Chebbi', 'Mohamed', '12345677', 'Avenue London', '1238', 'Manchester', 'England', '12345678', '98278471', 'sirfirgison@man.uni', 'no thing to say', 0);

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
(4, 'C214'),
(5, 'C21');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id_reserv` int(11) NOT NULL AUTO_INCREMENT,
  `id_loc` int(11) NOT NULL,
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
  KEY `id_loc` (`id_loc`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id_reserv`, `id_loc`, `id_groupe`, `datedeb`, `datefin`, `heuredeb`, `jourdeb`, `moisdeb`, `andeb`, `heurefin`, `jourfin`, `moisfin`, `anfin`, `archive_state`) VALUES
(1, 4, '4Twin 5', '2021-08-05', '2021-08-06', '10', '05', '08', 2021, '18', '06', '08', 2022, 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `eleves`
--
ALTER TABLE `eleves`
  ADD CONSTRAINT `eleves_ibfk_1` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id_groupe`);

--
-- Constraints for table `locataires`
--
ALTER TABLE `locataires`
  ADD CONSTRAINT `locataires_ibfk_1` FOREIGN KEY (`id_reserv`) REFERENCES `reservation` (`id_reserv`);

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_loc`) REFERENCES `locations` (`ID_loc`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
