<img src='./starlux-logo.png' alt='starlux-logo' width='300px'>

# Starlux

App created with react and Python-Django. Is an ecommerce for a Jewerly. It have features for managing the products, cart, purchases, etc.

It have two subprojects:
* **Frontend:** https://starlux.andrescode.com
* **Backend** (Documentacion): https://starlux-backend.andrescode.com/swagger
if it asks for credentials, use: 
    * john@gmail.com
    * john1234


## Steps to run

### Backend

1. Create the python virtual environment
```
python -m venv venv
```
2. Activate the virtual environment
```
venv/Scripts/activate
```
3. Install requirements
```
pip install -r requirements.txt
```
4. Create a .env file and fill the variables of the .env.example
5. Run migrations with
```
python manage.py migrate
```
6. Run the project with
```
python manage.py runserver
```


### Frontend
1. Create a .env file and set the `VITE_API_URL` variable with the url of the backend
2. install dependencies 
```
npm i
```
3. Run the project with
```
npm run dev
```
