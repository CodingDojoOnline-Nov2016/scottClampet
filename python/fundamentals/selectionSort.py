
import random

def selection_sort(a_li):
	start = 0
	while start < len(a_li):
		for num in range(start, len(a_li)):
			if(a_li[num] < a_li[start]):
				a_li[num], a_li[start] = a_li[start], a_li[num]
		start+=1
	return a_li



list1 = [2,1,4,3,6,5]
list2 = [random.randint(0,10000) for count in range(100)]

print selection_sort(list1)
print selection_sort(list2)