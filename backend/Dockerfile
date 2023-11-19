# base image  
FROM python:3.9.18-alpine3.18  
# setup environment variable  
ENV APP_HOME=/app  

# set work directory  
RUN mkdir -p $APP_HOME  

# where your code lives  
WORKDIR $APP_HOME  

# set environment variables  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  

# install dependencies  
RUN pip install --upgrade pip 
# copy whole project to your docker home directory. 
COPY . $APP_HOME  

# run this command to install all dependencies  
RUN \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    python3 -m pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps 


# port where the Django app runs  
EXPOSE 8000  
# start server  
CMD python manage.py runserver 0.0.0.0:8000 