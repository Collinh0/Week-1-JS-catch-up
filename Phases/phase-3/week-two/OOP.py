"""
Object Oriented Programming

Four main princoples: 
1. Inheritance
2. Abstraction
3. Encapsulation
4. Polymorphism

->Involves the use of classes and objects
-> It has methods and properties (attributes)

"""

#Class -> blueprint of how objects are created and how they behave

 #This is an example of a student entity
 #attributes -> naame,class,grade,gender,reg no.
 #Behaviours -> read,playing a game, rebellious,partying

 #Syntax
 class Student:

    #Should always present when creating classes in python
    #it always takes self as its first parameter
    #this method is always automatically called when a new instance is created 

    def __init__(self, name, age):
        #instance attributes
        self.name = name
        self.age = age
        

        #we use methods ton definbe behaviours
        #itv always take self as the fisrt param

        def read(self):
        print(f{self.name} "is reading about OOP")

#creating an instance of the student class
student1 = Student("Rannih",20)

print((student1.name))

student2 = Student("Carol",21)