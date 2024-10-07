# Generador de contraseñas
![image](https://github.com/user-attachments/assets/6d33e559-3c84-4be5-9fa4-e31e6088b7e0)

https://passwd-1.onrender.com/

El original era un python que al ejecutarlo en cmd te daba contraseñas. 

Este era el script de python:

**import random**


**letras = 'qwertyuiopasdfghjklñzxcvbnm'**
**numeros = '0123456789'**
**simbolos = '=!"#$%&/()*[]:_;><'**


**unir = letras + numeros + simbolos**

**longitud = 8**

**contraseña = random.choices(unir, k=longitud)**
**password_final = "".join(contraseña)**

**print(password_final)**
