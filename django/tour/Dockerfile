FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt
COPY . /app/api
EXPOSE 8000