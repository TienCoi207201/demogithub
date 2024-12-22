print("Nhập vào tiền điện của 12 tháng:")
a = [int(x) for x in input().split()]
sum = 0
for i in a:
    sum += i
print("Tổng số tiền điện trong 12 tháng là:", sum)
avg = sum / 12
print("Số tiền điện trung bình mỗi tháng là:", avg)
b = []
for i in range(len(a)):
    if a[i] > avg:
        b.append(i + 1)

print("Những tháng có tiền điện lớn hơn tiền điện trung bình là:", b)
print("Demo branch github")