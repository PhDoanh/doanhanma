---
status: Backlog
title: Ngôn ngữ truy vấn cấu trúc SQL
draft: true
tags:
  - language
  - database
  - MySQL
  - data
cssclasses:
---
%% Bắt đầu tại đây %%
# Giới thiệu
- **SQL (Structured Query Language)** là một ngôn ngữ truy vấn giao tiếp với các cơ sở dữ liệu như: 

# Các lệnh SQL cơ bản
```sql
/* Cấu trúc của một bảng */
show databases; -- hiển thị các csdl cơ sẵn
use database_name; -- sử dụng một csdl
desc table_name; -- mô tả các thuộc tính của bảng dư liệu trong csdl hiện tại
select * from table_name limit 3; -- lấy dữ liệu 3 hàng đầu của bảng  

/* Tạo bảng */
create table test(id int, name varchar(20)); -- Tạo bảng test mới với 2 thuộc tính id kiểu sô nguyên và name kiểu chuỗi tối đa 20 kí tự
select * from test; -- lấy tất cả dữ liệu bảng test: bảng trống (do mới tạo)
create table test_new as select id, name from table_name; -- tạo bảng test_new chứa các dữ liệu id và name từ bảng table_name
select * from test_new limit 3; -- lấy dữ liệu 3 hàng đầu của bảng test_new chỉ chứa 2 cột id và name! (3 hàng đầu không thứ tự)
select * from test_new order by id limit 3 -- lấy dư liệu 3 hàng đầu có thứ tự tăng dần của id trong bảng test_new

/* Lấy dữ liệu trong bảng */
select * from table_name where name like 'C%' and population > 80000; -- lấy tất cả hàng dữ liệu thỏa mãn tên bắt đầu bởi kí tự C và dân số lớn hơn 80000 (các hàng theo thứ tự ngẫu nhiên -> muốn tăng dần thêm 'order by id', giảm dần thì 'order by id desc')
select upper(name) from table_name limit 3; -- lấy dữ liệu 3 hàng đầu của cột tên được viết in hoa (thứ tự ngẫu nhiên)
select upper(name), lower(name), name from table_name limit 3; -- lấy dữ liệu 3 hàng đầu của 3 cột tên được in hoa hết, in thường hết và in thường
select countrycode, count(*) from table_name group by countrycode; -- Lấy các hàng dữ liệu được nhóm lại bởi countrycode của cột countrycode và tần suất xuất hiện tương ứng trong bảng table_name
select * from table_name where countrycode='TZA'; -- lấy tất cả dữ liệu thoả countrycode bằng TZA (10 bản ghi - 10 hàng)
show tables; -- hiển thị các bảng có trong csdl hiện tại
select c.name, c.population, c.countrycode, co.code, co.name from city c, country co where c.countrycode=co.code; -- lấy các dư liệu của các cột name, population, countycode trong bảng city và các cột code, name trong bảng country thỏa countrycode bằng code




```

# Tạo cơ sở dữ liệu trong SQL
1. Tạo cơ sở dữ liệu mới
```sql

```

2. Xóa một cơ sở dữ liệu
3. Đổi tên cơ sở dữ liệu
4. Sử dụng một cơ dữ liệu có sẵn






> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*