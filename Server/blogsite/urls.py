
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from blog_api import urls as blog_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blogApp.urls')),
    path('ckeditor/',include('ckeditor_uploader.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('blog/', include(blog_urls)),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
