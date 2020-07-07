from django.db import models

from account.models import Account
from videos.models import Videos


class Comments(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.TextField(blank=True)
    agreeCount = models.IntegerField(default=0)
    disAgreeCount = models.IntegerField(default=0)
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    video = models.ForeignKey(Videos, on_delete=models.CASCADE)

    class Meta:
        ordering = ["created"]
