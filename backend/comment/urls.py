from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/post', views.postComments),
    path('<str:video_id>', views.viewComments)
]