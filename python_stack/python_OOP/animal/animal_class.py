class Animal():
	def __init__(self, name, health=100):
		self.name = str(name)
		self.health = health

	def walk(self):
		self.health -= 1
		return self

	def run(self):
		self.health -= 5
		return self

	def displayHealth(self):
		print 'Animal Name: ', self.name
		print 'Health: ', self.health
		return self

# jax = Animal('jax')
# jax.walk().walk().walk().run().run().displayHealth()

