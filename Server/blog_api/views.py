from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from blogApp.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import AllowAny

class PostListApiView(APIView):
  
    permission_classes = (AllowAny,)

    
    def get(self, request, *args, **kwargs):
     
        todos = Post.objects
        serializer = PostSerializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PostDetailApiView(APIView):
   
    permission_classes = (AllowAny,)

    def get_object(self, post_id):
    
        try:
            return Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return None

  
    def get(self, request, post_id, *args, **kwargs):
      
        post_instance = self.get_object(post_id)
        if not post_instance:
            return Response(
                {"res": "Object with todo id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = PostSerializer(post_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)