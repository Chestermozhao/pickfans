from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response
from django.db.models import F

from comments.models import Comments
from comments.serializers import CommentsSerializer, DetailCommentSerializer


class CommentsViewSet(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

    """
    drf 共存在四種方法
    - list
    - update
    - retrieve
    - destroy
    - create
    """

    def list(self, request):
        serializer_context = {"request": Request(request._request)}
        need_details = request.GET.get("need_details")
        queryset = Comments.objects.all()
        if not need_details:
            serializer = CommentsSerializer(
                queryset, many=True, context=serializer_context
            )
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            serializer = DetailCommentSerializer(
                queryset, many=True, context=serializer_context
            )
            return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=["post"])
    def incr_like_or_dislike(self, request, pk=None):
        like = request.data.get("like")
        comment = Comments.objects.get(pk=pk)
        serializer_context = {"request": Request(request._request)}
        if like:
            comment.agreeCount = F("agreeCount") + 1
            comment.save(update_fields=["agreeCount"])
        else:
            comment.disAgreeCount = F("disAgreeCount") + 1
            comment.save(update_fields=["disAgreeCount"])
        comment.refresh_from_db()
        serializer = CommentsSerializer(comment, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)
