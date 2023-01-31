from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

@api_view(['GET'])
@permission_classes([AllowAny])
def videoComments(request, pk):
    comments = Comment.objects.filter(video_id=pk)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)