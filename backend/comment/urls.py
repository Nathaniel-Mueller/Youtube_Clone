from django.urls import path
from . import views

urlpatterns = [
    path('', views.postComments),
    path('<pk>', views.viewComments)
]