x = 25

def my_func():
    x = 50
    return x

def my_func2():
    return x

print(x)
print(my_func())
print(my_func2())

print("\n# Another example\n")

name = "This is a global name!"

def greet():
    name = "sammy"

    def hello():
        print("hello "+name)

    hello()

greet()

print("\n# Another example\n")

x = 50

def func():
    global x
    x = 1000

print("before function call, x is: ", x)
func()
print("after function call, x is: ", x)