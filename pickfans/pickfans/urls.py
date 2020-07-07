from django.urls import include, path
from rest_framework import routers
from pickfans import views
from account import views as account_views
from videos import views as video_views
from channels import views as channels_views
from comments import views as comments_views

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r"account", account_views.AccountViewSet)
router.register(r"videos", video_views.VideosViewSet)
router.register(r"channels", channels_views.ChannelsViewSet)
router.register(r"comments", comments_views.CommentsViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
