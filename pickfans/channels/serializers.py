from channels.models import Channels
from rest_framework import serializers


class ChannelsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Channels
        fields = ["id", "created", "url", "name", "description"]
