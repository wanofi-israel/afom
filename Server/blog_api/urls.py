from . import views
from django.contrib import admin
from django.urls import path, re_path
from django.contrib.auth import views as auth_views
from django.views.generic.base import RedirectView
from .views import (
    PostListApiView,
    PostDetailApiView,
)

urlpatterns = [
    path('api', PostListApiView.as_view()),
    path('api/<int:post_id>/', PostDetailApiView.as_view()),
]