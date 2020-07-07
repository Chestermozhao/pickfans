from django.db import models


class Channels(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    url = models.URLField(max_length=200, unique=True, blank=False)
    name = models.CharField(max_length=30, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["created"]
