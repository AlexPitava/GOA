#4 არითმეტიკული მოქმედების ფუნქციები

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y

# აქედან ინპუთის საშვალებით ხდება მომხმარებლისგან რიცხვების შეტანა

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# შესრულდება 4 არითმეტიკული მოქმედება(მიმატება, გამოკლება, გაყოფა და გამრავლება)

addition = add(num1, num2)
subtraction = subtract(num1, num2)
multiplication = multiply(num1, num2)
division = divide(num1, num2)

#აქედან უკვე დაიპრინტება 4-ვე შედეგი ტერმინალში
print("Addition:", addition)
print("Subtraction:", subtraction)
print("Multiplication:", multiplication)
print("Division:", division)


def triangle(a,b,c):
    if (a + b < c):
        return ("Proportions are off")
    if (b + c < a):
        return ("Proportions are off")
    if (a + c < b):
        return ("Proportions are off")
    else:
        return ("This type of triangle really exists, Good Job !")

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * (n-1)