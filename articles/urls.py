from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView, CategoryListAPIView, AdminListAPIView, UserArticleListAPIView

app_name = 'articles'

urlpatterns = [
    path('<int:pk>', ArticleDetailAPIView.as_view(), name="article_detail"),
    path('admin/', AdminListAPIView.as_view()),
    path('category/', CategoryListAPIView.as_view()),
    path('user/', UserArticleListAPIView.as_view()),
    path('', ArticleListAPIView.as_view(), name="article_list"),
]
