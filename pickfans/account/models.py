from django.db import models
from django.utils import timezone
from channels.models import Channels

# TODO: const
default_avatar = "http://img.duoziwang.com/2019/05/08050202206333.jpg"


class Account(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    google_id = models.CharField(max_length=100, blank=True)
    user_name = models.CharField(max_length=100, blank=True)
    avatar = models.CharField(max_length=100, default=default_avatar)
    fansLevel = models.IntegerField(default=1)
    updated_at = models.DateTimeField(auto_now=True)
    subscribes = models.ManyToManyField(Channels, blank=True)
    # TODO: add customize videos and channels

    class Meta:
        ordering = ["created"]
