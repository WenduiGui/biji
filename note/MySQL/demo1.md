#-----MySql数据库操作基础-----

#显示数据库
show databases;

#判断是否存在数据库wpj1105,有的话先删除
drop database if exists wpj1105;

#创建数据库
create database wpj1105;

#删除数据库
drop database wpj1105;

#使用该数据库
use wpj1105;

#显示数据库中的表
show tables;

#先判断表是否存在,存在先删除
drop table if exists student;

#创建表
create table student(
id int auto_increment primary key,
name varchar(50),
sex varchar(20),
date varchar(50),
content varchar(100)
)default charset=utf8;

#删除表
drop table student;

#查看表的结构
describe student;  #可以简写为desc student;

#插入数据
insert into student values(null,'aa','男','1988-10-2','......');
insert into student values(null,'bb','女','1889-03-6','......');
insert into student values(null,'cc','男','1889-08-8','......');
insert into student values(null,'dd','女','1889-12-8','......');
insert into student values(null,'ee','女','1889-09-6','......');
insert into student values(null,'ff','null','1889-09-6','......');
#查询表中的数据
select * from student;
select id,name from student;

#修改某一条数据
update student set sex='男' where id=4;

#删除数据
delete from student where id=5;