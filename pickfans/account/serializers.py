from account.models import Account
from rest_framework import serializers
from channels.serializers import ChannelsSerializer


class AccountSerializer(serializers.HyperlinkedModelSerializer):
    subscribes = ChannelsSerializer(many=True)

    class Meta:
        model = Account
        fields = [
            "id",
            "created",
            "google_id",
            "user_name",
            "avatar",
            "fansLevel",
            "updated_at",
            "subscribes",
        ]
