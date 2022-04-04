drop database amazon;
create database amazon;
use amazon;

create trigger cat_delete before delete on category_electronic
for each row 
delete from t_electronic where cid = old.cid;

DROP TABLE IF EXISTS `category_electronic`;
CREATE TABLE `category_electronic` (
  `cid` varchar(200) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `imgurl` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

DROP TABLE IF EXISTS `t_electronic`;
CREATE TABLE `t_electronic` (
  `id` varchar(200) NOT NULL,
  `cid` varchar(200) DEFAULT '0',
  `name` varchar(200) DEFAULT '0',
  `price` varchar(200) DEFAULT NULL,
  `moq` varchar(200) DEFAULT '0',
  `url` varchar(200) DEFAULT '0',
  `imgurl` varchar(200) DEFAULT '0',
  PRIMARY KEY (`id`),
  foreign key(cid) references category_electronic(cid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

