from django.urls import path
from . import views

urlpatterns = [
    path('', views.postComments),
    path('<str:video_id>', views.viewComments)
]