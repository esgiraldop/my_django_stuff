class Sample():
    pass

x = Sample()
print(x)

print("\n#Another example#\n")

class Dog():

    # Class object attributes are the same for all the instances
    species = "mammal" # All dogs are mammals

    def __init__(self,breed,name):
        self.breed = breed # Attributes can be different depending on the instance
        self.name = name

mydog = Dog("Dogger","Erick")
otherdog = Dog("Huskie", "Fede")
print(mydog.breed)
print(mydog.name)
print(otherdog.breed)
print(otherdog.name)

# Class object attributes are the same for all the instances
print(mydog.species)
print(otherdog.species)

print("\n#Another example. Methods#\n")

class Circle():

    pi = 3.14 # This applies for all the circles

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius**2*self.pi # pi can also be called as Circle.pi

    def set_radius(self, new_r):
        self.radius = new_r

myc = Circle(3)
print(myc.radius)
print(myc.area())

#Attributes can be replaced in two ways
myc.radius = 100
print(myc.radius)
myc.set_radius(50) # This is more "correc" according to purists programmers
print(myc.radius)

print("\n#Another example. Inheritance#\n")

class Animal():

    def __init__(self):
        print("Animal created")

    def whoAmI(self):
        print("Animal")

    def eat(self):
        print("Eating")

class Dog(Animal):

    def __init__(self):
        Animal.__init__(self)
        print("Dog created")

    def bark(self):
        print("WOOF!")

    def eat(self):
        # Overwritting a method from the base object
        print("Dog eating")

mya = Animal()
mya.whoAmI()
mya.eat()

mydog = Dog()
mydog.bark()
mydog.eat()

print("\n#Another example. Special methods#\n")

class Book():

    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f"{self.title}, {self.author}, {self.pages}"

    def __len__(self):
        return self.pages

    def __del__(self):
        print("A book is destroyed!")

b = Book("Python", "Jose", 200)

print(b)
print(len(b))
print("sadasd")

del b
print(b) # Causes an error