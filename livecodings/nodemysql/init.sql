CREATE TABLE `ecoles` (
  `id` int(11) not null auto_increment primary key,
  `nom` varchar(100) null,
  `ville` varchar(100) null,
  `capacite` int(5) NOT NULL DEFAULT 30
);