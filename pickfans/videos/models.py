from django.db import models

from channels.models import Channels


class Videos(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default="")
    route = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True)
    youtuber = models.CharField(max_length=30, blank=True)
    viewsCount = models.IntegerField()
    uploadDate = models.CharField(max_length=10, blank=False)
    channel = models.ForeignKey(Channels, on_delete=models.CASCADE)

    class Meta:
        ordering = ["created"]
