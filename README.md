# Day 3

## Classes And Objects

### What are classes 

    In TypeScript, classes are blueprints for creating objects. They encapsulate data (properties) and behavior (methods) into a single unit. By defining classes, you can organize your code, promote reusability, and enhance readability.

### Key Components Involves 

    - Methods: Functions defined within a class that perform specific actions.
    
    - Constructors: Special methods called when an object is created from a class. Constructors initialize class properties.
    
    - Properties: Variables associated with a class instance.
    
    - Inheritance: The ability to create new classes based on existing ones, allowing code reuse and specialization.


### Objects in Typescript

    - Objects An object is an instance of class which contains set of key value pairs. It's value may be scalar values or functions or even array of other objects. 

### Difference Btw Extends and Implements

    - The extends keyword is used for two main purposes in TypeScript: inheriting from a class (class inheritance) and extending a type (type extension).

    - The implements keyword is used to ensure that a class conforms to a particular interface. This enforces that the class implements all the properties and methods defined by the interface.

### Final Core Revision 

- what is typescript ✅ ? 
- how typescript is different and related to Javascript ? 
- What are the Built in data types in the Typescript ? 
- Advantages of Typescript over Javascript ? 
- How Typescript Work ? 
- What is Type annotations and inference ? 
- Union and any terminologies ? 
    - Union is used to reduce the number of lines of codes to write again and again.
    - Any is default type of a variable which means it can have any data type during run time
- What is Type Narrowing and how it is done ? 
    -   Type narrowing in TypeScript refers to the process of refining a variable's type from a broader, more general type to a more specific one within a certain code block, based on runtime checks or control flow.  This enables safer access to properties, methods, or values unique to the narrowed type

  - typeof Type Guard
  - truthiness narrowing
      - Equality Narrowing 
      - The 'in' Operater Narrowing
      - Instance of Narrowing 
      - Control Flow Analysis
      - using type predicates
      - Assestion Functions
      - Exhaustiveness checking
- What is Type Guarding and How it is different from the Narrowing using "unkown"
- difference Btw the Any and Unkown? 
    - the main difference in any and unkown relies when we use any is doesn't matter what values we are using in the program but when we use the unknown we have to tell the variable and typescript what is the type of it.
-
