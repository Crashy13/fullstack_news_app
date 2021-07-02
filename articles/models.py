from django.conf import settings
from django.db import models
from django import forms



class Article(models.Model):

    FOOD = 'FOOD'
    ENTERTAINMENT = 'ENTERTAINMENT'
    FASHION = 'FASHION'
    TECH = 'TECH'


    CATEGORY_CHOICES = [
    (FOOD, 'Food'),
    (ENTERTAINMENT, 'Entertainment'),
    (FASHION, 'Fashion'),
    (TECH, 'Tech')
    ]


    title = models.CharField(max_length=255)
    body = models.TextField()
    # https://docs.djangoproject.com/en/3.2/ref/models/fields/#module-django.db.models.fields.related
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    category = models.CharField(max_length=255, null=True)
    is_published = models.BooleanField(default=False)


    def __str__(self):
        return self.title
