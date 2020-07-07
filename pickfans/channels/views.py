from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response

from channels.models import Channels
from channels.serializers import ChannelsSerializer
from videos.serializers import VideosSerializer


class ChannelsViewSet(viewsets.ModelViewSet):
    queryset = Channels.objects.all()
    serializer_class = ChannelsSerializer

    @action(detail=False, methods=["post"])
    def videos(self, request):
        channel_id = request.data.get("channel_id")

        channel = Channels.objects.get(pk=channel_id)
        serializer_context = {"request": Request(request._request)}
        videos_in_channel = channel.videos_set.all()
        serializer = VideosSerializer(
            videos_in_channel, many=True, context=serializer_context
        )
        return Response(serializer.data, status=status.HTTP_200_OK)
