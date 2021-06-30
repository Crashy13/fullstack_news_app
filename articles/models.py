from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    author = models.CharField(max_length=255)
    category = models.CharField(max_length=255)


    def __str__(self):
        return self.title
