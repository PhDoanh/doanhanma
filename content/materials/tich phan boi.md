---
status: Done
title: Tích phân bội
draft: false
tags:
  - math
  - caculus
  - integral
  - 2-class-integral
  - 3-class-integral
---
%% Bắt đầu tại đây %%
# Tích phân kép trong tọa độ Đề Các
Nếu miền D là hình chữ nhật xác định bởi $a≤x≤b,~c≤y≤d$, thì:
$$
\iint\limits_Df(x,y)dxdy=\int\limits_a^bdx\int\limits_c^df(x,y)dy
$$

Nếu miền D được xác định bởi $a≤x≤b,~y1_(x)≤y≤y_2(x)$ thì:
$$
\iint\limits_Df(x,y)dxdy=\int\limits_a^bdx\int\limits_{y_1(x)}^{y_2(x)}f(x,y)dy
$$

> [!info]- Lưu ý
> Vế phải của các công thức trên được gọi là **tích phân lặp**, tích phân theo biến nào thì coi biến còn lại là hằng số

# Đổi biến trong tích phân kép
Đặt $x=x(u,~v),~y=y(u,~v)$, khi đó:
$$
I=\iint\limits_{D}f(x,~y)dxdy=\iiint\limits_{D'}f[x(u,~v),~y(u,~v)].|J|.dudv
$$

Trong đó:
- $D'$ là ảnh của $D$ qua phép đổi biến (từ $xOy$ sang$uOv$)
- Định thức Jacobi:
$$
J=\begin{vmatrix}x'_u&x'_v\\y'_u&y'_v\end{vmatrix}
$$

# Tích phân kép trong tọa độ Cực
$$
I=\iint\limits_Df(x,~y)dxdy=\iiint\limits_{D'}f(r\cos\varphi,~r\sin\varphi).r.drd\varphi 
$$

# Ứng dụng tích phân kép
1. **Thể tích** vật thể hình trụ có đg sinh song song với Oz, đáy là miền D trong mặt phẳng $z=0$, ở phía trên giới hạn bởi mặt $z=f(x, y)≥0$ trên D là:
$$
V=\underset{D}{\operatorname*{\iint}}f(x,y)dxdy\quad\text{(đvtt)}
$$

2. **Diện tích** miền D trong Oxy
$$
S=\underset{D}{\operatorname*{\iint}}dxdy\quad\text{(đvdt)}
$$

3. **Diện tích mặt cong** $z=f(x, y)$ giới hạn bởi 1 đường cong kín
$$
S=\iint\limits_D\sqrt{1+(z_x')^2+(z_y')^2}~dxdy\quad\text{(đvdt)}
$$
 ^1114d2
4. **Khối lượng** bản phẳng D trong Oxy có khối lượng riêng là $\rho(x, y)$
$$
m=\iint\limits_D\rho(x,~y)dxdy\quad\text{(đvkl)}
$$

5. **Tọa độ trọng tâm** G của bản D
$$
\begin{gathered}
\text{xG} =\frac1m\iint_Dx\rho(x,y)dxdy \\\\
\text{yG} =\frac1m\iint_Dy\rho(x,y)dxdy 
\end{gathered}
$$

# Tích phân bội 3 trong tọa độ Đề Các
Nếu miền V được xác định bởi $a≤x≤b, y_1(x)≤y≤y_2(x), z_1(x, y)≤z≤z_2(x, y)$ thì:
$$
\iiint\limits_Vf(x,~y,~z)dxdydz=\int\limits_a^bdx\int\limits_{y_1(x)}^{y_2(x)}dy\int\limits_{z_1(x,~y)}^{z_2(x,~y)}f(x,~y,~z)dz
$$

# Đổi biến trong tích phân bội 3
Đặt $x=x(u,~v,~w), y=y(u,~v,~w), z=z(u,~v,~w)$, khi đó:
$$
I=\iiint_Vf(x,y,z)dxdydz=\iiint_{V^{\prime}}f[x(u,v,w),y(u,v,w),z(u,v,w)].|J|.dudvdw
$$

Trong đó:
- $V'$ là ảnh của $V$ qua phép đổi biến (từ $Oxyz$ sang $Ouvw$)
- Định thức Jacobi:
$$
J=\begin{vmatrix}x'_u&x'_v&x'_w\\y'_u&y'_v&y'_w\\z'_u&z'_v&z'_w\end{vmatrix}
$$

# Tích phân bội 3 trong tọa độ Trụ
$$
\iiint_Vf(x,~y,~z)dxdydz=\iiint_{V^{\prime}}f(r\cos\varphi,~r\sin\varphi,~z).r.drd\varphi dz
$$

# Tích phân bội 3 trong tọa độ Cầu
$$
\iiint_Vf(x,~y,~z)dxdydz=\iiint_{V^{\prime}}f(r\cos\varphi\sin\theta,~r\sin\varphi\sin\theta,~r\cos\theta).r^2\sin\theta.drd\theta d\varphi 
$$

# Ứng dụng tích phân bội 3
1. Thể tích vật thể
$$
V=\underset{V}{\operatorname*{\iiint}}ddxdydz\quad\text{(đvtt)}
$$

2. Khối lượng vật thể có khối lượng riêng $\rho=\rho(x, y, z)$
$$
m=\iiint\limits_V\rho(x,y,z)dxdydz\quad\text{(đvkl)}
$$

3. Tọa độ trọng tâm G của vật thể
$$
\begin{align}
x_G =\frac1m\iiint_Vx\rho(x,y,z)dxdydz \\\\
y_G =\frac1m\iiint_Vy\rho(x,y,z)dxdydz \\\\
z_G =\frac1m\iiint_Vz\rho(x,y,z)dxdydz 
\end{align}
$$

# Tổng hợp các dạng BT
- [Giải tích 2 | 2.2 Tích phân bội 2: cách tính và ứng dụng](https://youtu.be/9afPgCNpFqw?si=6iTZlOCCuhk-9Mbb)
- [Giải tích 2 | 2.2.1 Cách vẽ hình đổi thứ tự tính tích phân bội 2](https://youtu.be/OpzfEiNERmI?si=KDK8tdZq9MrWEKY5)
- [Giải tích 2 | 2.3 Tích phân bội 3 Full lý thuyết và bài tập](https://youtu.be/vFSaZORHYoU?si=1EKmsVaaWsiWtSFW)

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*