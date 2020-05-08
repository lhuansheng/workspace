## Using the combine Command for Making Data

data1 = c(3, 5, 7, 5, 3, 2, 6, 8, 5, 6, 9)
创建类似数组
data2 = c(data1,2,2,2)
可以合并

## Using the scan Command for Making Data

1. data3 = scan()
   回车
   1: 6 7 8 7 6 3 8 9 10 7
   回车
   Read 12 items
2. 输入字符串 scan(what = 'character')
   > day2
   > [1] "Mon" "Tue" "Wed" "Thu"
3. 复制黏贴 scan(sep = ‘,’)
   > data4 = scan(sep = ',')
   > 1: 23,17,12.5,11,17,12,14.5,9
   > 9: 11,9,12.5,14.5,17,8,21
   > 16:
   > Read 15 items
   > data5 = scan(sep = ',', what = 'char')
   > 1: "Jan","Feb","Mar","Apr","May","Jun"
   > 7: "Jul","Aug","Sep","Oct","Nov","Dec"
   > 13:
   > Read 12 items

## Reading a File of Data from a Disk

> data6 = scan(file = 'test data.txt')
> Read 15 items

1. 找到工作目录 getwd()
   > getwd()
   > [1] "C:/Documents and Settings/Administrator/My Documents"
2. 重新设置工作路径 setwd('pathname')
3. 查看目录下的文件 dir() 或 list.files()
4. 可以查看一些隐藏文件 dir(all.files = TRUE)
5. 手动选择文件 file.choose()
   > data7 = scan(file.choose())
   > Read 15 items
6. 对文件读取进行限制
   > data8 = scan(file.choose(), what = 'char', sep = ',')
   > Read 12 items
   > data8
   > [1] "Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"

## Reading Bigger data Files

1. The read.csv() Command
   read.csv(file, sep = ',', header = FALSE, row.names)
   以上是默认，第一行为变量
   例子
   fw = read.csv(file.choose())
   > fw
   > abund flow
   > 1 9 2
   > 2 25 3
   > 3 15 5
   > 4 2 9
   > 5 14 14
   > 6 25 24
   > 7 24 29
   > 8 47 34

## Alternative Commands for Reading Data in R

read.delim() 默认有制表符
read.csv() 可以用 \t
read.table()
data1 data2 data3
1 2 4
4 5 3
3 4 5
3 6 6
4 5 9

> my.tsv = read.delim(file.choose())
> my.tsv = read.csv(file.choose(), sep = '\t')
> my.tsv = read.table(file.choose(), header = TRUE, sep = '\t')
> 以上三种应该是等价的，，

## Missing Values in Data Files

没有的会以 NA 代表

## Viewing Named Objects 查看已命名变量

ls() 查看先前已经加载的变量
ls(pattern = 'b') 匹配部分有 b 的变量
ls(pattern = '^b') 以 b 开头
ls(pattern = '^[be]') 匹配有 b 或者 e
也可以用 ls(pattern = '^b|^e')
ls(pattern = 'm\$')以 m 结尾
ls(pattern = 'a.e') .匹配任意字符

## Removing objects from R
rm(list)
remove(list)
