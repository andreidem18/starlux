# Steps to run

## Backend

1. Create the virtual environment
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


## Frontend
