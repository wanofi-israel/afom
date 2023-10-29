from rest_framework import serializers
from blogApp.models import Post
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id","category", "title", "author", "blog_post", "banner", "status", "date_added", "date_updated"]