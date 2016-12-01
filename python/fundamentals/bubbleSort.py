

a_li = [6,5,3,1,8,7,2,4]

def bubbleSort(a_li):
	for i in range(len(a_li) - 1):
		if(a_li[i] > a_li[i + 1]):
			temp = a_li[i]
			a_li[i] = a_li[i + 1]
			a_li[i + 1] = temp
		else:
			continue
	print a_li
print bubbleSort(a_li)