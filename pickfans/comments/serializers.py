from comments.models import Comments
from rest_framework import serializers
from videos.serializers import VideosSerializer
from account.serializers import AccountSerializer


class CommentsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comments
        fields = [
            "id",
            "created",
            "content",
            "agreeCount",
            "disAgreeCount",
            "user",
            "video",
        ]


class DetailCommentSerializer(serializers.HyperlinkedModelSerializer):
    user = AccountSerializer(many=False)
    video = VideosSerializer(many=False)

    class Meta:
        model = Comments
        fields = [
            "id",
            "created",
            "content",
            "agreeCount",
            "disAgreeCount",
            "user",
            "video",
        ]
