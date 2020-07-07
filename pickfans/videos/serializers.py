from videos.models import Videos
from rest_framework import serializers


class VideosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Videos
        fields = [
            "id",
            "created",
            "title",
            "route",
            "description",
            "youtuber",
            "viewsCount",
            "uploadDate",
            "channel",
        ]
