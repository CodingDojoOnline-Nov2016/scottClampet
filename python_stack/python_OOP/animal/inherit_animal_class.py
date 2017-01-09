from animal_class import Animal

class Dog(Animal):
	def __init__(self):
		super(Dog, self).__init__() 
		self.health = 150

	def pet(self):
		self.health += 5
		return self

murphy = Dog()
murphy.displayHealth()