from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response
from django.db.models import F

from videos.models import Videos
from videos.serializers import VideosSerializer


class VideosViewSet(viewsets.ModelViewSet):
    queryset = Videos.objects.all()
    serializer_class = VideosSerializer

    @action(detail=True, methods=["post"])
    def incr_views(self, request, pk=None):
        video = Videos.objects.get(pk=pk)
        serializer_context = {"request": Request(request._request)}
        video.viewsCount = F("viewsCount") + 1
        video.save(update_fields=["viewsCount"])
        video.refresh_from_db()

        serializer = VideosSerializer(video, context=serializer_context)
        return Response(serializer.data, status=status.HTTP_200_OK)
