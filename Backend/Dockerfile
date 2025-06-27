# Dockerfile (versión mejorada)
FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /drf_src

# Instalar dependencias del sistema necesarias (si hiciera falta)
RUN apt-get update && apt-get install -y build-essential

# Copiar los archivos desde tu PC al contenedor
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
