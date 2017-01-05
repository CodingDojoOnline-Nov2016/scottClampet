class Bike(object):
	def __init__(self, price, max_speed, miles=0):
		print '\t'
		print "New Bike!"

		self.price = price
		self.max_speed = max_speed
		self.miles = miles

	def displayInfo(self):
		print 'Price:', self.price
		print 'Max Speed:', self.max_speed
		print 'Miles:', self.miles
	def ride(self):
		print 'Riding...'
		self.miles += 10
		# print 'Total miles:', self.miles
	def reverse(self):
		print 'Reversing...'
		if self.miles >= 5:
			self.miles -= 5
		else:
			self.miles = 0
		# print 'Total miles', self.miles

bike1 = Bike(200, '25mph')
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike2 = Bike(100, '20mph')
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

bike3 = Bike(200, '25mph')
bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()

