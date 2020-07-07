from django.db import IntegrityError
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import viewsets, status

from account.models import Account
from account.serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    # subscribe and unsubscribe channels
    @action(detail=False, methods=["post"])
    def subscribe_video(self, request):
        try:
            account_id = request.data.get("account_id")
            sub_channel_id = request.data.get("sub_channel_id")

            user = Account.objects.get(pk=account_id)
            user.subscribes.add(sub_channel_id)
            serializer_context = {"request": Request(request._request)}
            serializer = AccountSerializer(
                instance=user, context=serializer_context
            )  # , many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except IntegrityError:
            return Response({"errMsg": "Subscribe Channel Not Found"})

    @action(detail=False, methods=["post"])
    def unsubscribe_video(self, request):
        try:
            account_id = request.data.get("account_id")
            unsub_channel_id = request.data.get("unsub_channel_id")

            user = Account.objects.get(pk=account_id)
            user.subscribes.remove(unsub_channel_id)
            serializer_context = {"request": Request(request._request)}
            serializer = AccountSerializer(
                instance=user, context=serializer_context
            )  # , many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except IntegrityError:
            return Response({"errMsg": "Subscribe Channel Not Found"})
